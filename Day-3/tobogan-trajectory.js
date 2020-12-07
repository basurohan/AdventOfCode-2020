const fs = require('fs');

const data = fs.readFileSync('day3-map.txt', 'utf8').split('\n');

const number_of_trees = (data, right, down) => {
    const columnLength = data[0].length - 1;
    let currRowIndex = 0;
    let currColIndex = 0;
    let numTrees = 0;

    while (currRowIndex < data.length - 1) {
        if (currColIndex === columnLength || currColIndex + right > columnLength) {
            currColIndex = currColIndex + right - columnLength - 1;
        } else {
            currColIndex = currColIndex + right;
        }
        currRowIndex = currRowIndex + down;
        if (data[currRowIndex][currColIndex] === '#') {
            numTrees++; 
        }
    }
    return numTrees;
}

const part_1 = number_of_trees(data, 3, 1);

console.log(part_1);

const combo1 = number_of_trees(data, 1, 1);
const combo2 = number_of_trees(data, 3, 1);
const combo3 = number_of_trees(data, 5, 1);
const combo4 = number_of_trees(data, 7, 1);
const combo5 = number_of_trees(data, 1, 2);

const part_2 = (combo1*combo2*combo3*combo4*combo5);

console.log(part_2);

