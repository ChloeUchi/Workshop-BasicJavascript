const arr = [22, 19, 2, 89, 77];

function findMax() {
    let max_value = Math.max(...arr);
    return max_value;
}

function sortNum() {
    let sort_num = arr.slice().sort();
    return sort_num;
}

function printPyramid(rows) {
    let pyramid = '';
    for (let i = 0; i < rows; i++) {
        // Add spaces before the first '*' to center the pyramid
        pyramid += ' '.repeat(rows - i - 1);
        // Add '*' for the current row
        pyramid += '*'.repeat(2 * i + 1);
        // Move to the next line
        pyramid += '\n';
    }
    console.log('Result\n', pyramid);
}


console.log('Max value = ', findMax());
console.log('Sorted = ', sortNum());
printPyramid(5);