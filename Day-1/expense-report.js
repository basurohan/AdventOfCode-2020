const fs = require('fs');

const data = fs.readFileSync('day1-expense-report.txt', 'utf8').split('\n').sort((a,b)=> a-b);
const numData = data.map(item => Number(item));

const twoSum = (input) => {
    const target = 2020;
    const result = [];
    let start = 0;
    let end = input.length - 1;

    while (start < end) {
        const sum = input[start] + input[end];
        if (target === sum) {
            result.push(data[start]);
            result.push(data[end]);
            break;
        } else if (target > sum) {
            start++;
        } else {
            end--;
        }
    }
    return result[0] * result[1];
}

const threeSums = (input) => {
    const target = 2020;
    const result = [];

    for (let i = 0; i < input.length-2; i++) {
        let start = i + 1;
        let end = input.length - 1;
        while (start < end) {
            const sum = input[i] + input[start] + input[end];
            if (target === sum) {
                result.push(data[i]);
                result.push(data[start]);
                result.push(data[end]);
                break;
            } else if (target > sum) {
                start++;
            } else {
                end--;
            }
        }
        if (result.length > 0) break;
    }
    return result[0] * result[1] * result[2];
}


const result2Sum = twoSum(numData);

const result3Sum = threeSums(numData);

console.log(result2Sum);
console.log(result3Sum);
