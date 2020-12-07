const fs = require('fs');

const data = fs.readFileSync('day2-passwords.txt', 'utf8').split('\n');

const interpretation_one = (data) => {
    const valid = [];

    data.map(password => {
        const splitRow = password.split(' ');
        const min = splitRow[0].split('-')[0];
        const max = splitRow[0].split('-')[1];
        const letter = splitRow[1].split('')[0];
        
        let count = 0;
        for (c of splitRow[2].split('')) {
            if (c === letter) count++;
        }
        if (count >= min && count <= max) {
            valid.push(password);
        }
    });

    return valid.length;
}

const interpretation_two = (data) => {
    let count = 0;
    data.map(password => {
        const splitRow = password.split(' ');
        const first = splitRow[0].split('-')[0];
        const second = splitRow[0].split('-')[1];
        const letter = splitRow[1].split('')[0];

        if (!(splitRow[2][first-1] === letter && (splitRow[2].length >= Number(second) && splitRow[2][second-1] === letter))) {
            if (splitRow[2][first-1] === letter) {
                if (splitRow[2].length >= Number(second) && splitRow[2][second-1] !== letter) {
                    count++;
                }
            } else if (splitRow[2].length >= Number(second) && splitRow[2][second-1] === letter) {
                count++;
            }
        }
    });
    return count;
}


console.log(interpretation_one(data));
console.log(interpretation_two(data));