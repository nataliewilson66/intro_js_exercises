Array.prototype.uniq = function () {
    const len = this.length;
    let i = 0;
    let result = [];
    while (i < len) {
        let j = i + 1;
        while (this[i] === this[j]) {
            j++;
        }
        result.push(this[i]);
        i = j;
    }

    return result;
}

// Test: 
// Input: [1, 1, 2, 2, 2, 3, 3]
// Output: [1, 2, 3]
console.log([1, 1, 2, 2, 2, 3, 3].uniq());


Array.prototype.twoSum = function () {
    let result = [];
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                result.push([i, j]);
            }
        }
    }

    return result;
}

// Test: 
// Input: [1, -1, 3, 4, 8, -3, -1, 3]
// Output: [[0, 1], [0, 6], [2, 5], [5, 7]]
console.log([1, -1, 3, 4, 8, -3, -1, 3].twoSum());

Array.prototype.transpose = function () {
    let result = [];
    for (let i = 0; i < this[0].length; i++) {
        let subarr = [];
        for (let j = 0; j < this.length; j++) {
            subarr.push(this[j][i]);
        }
        result.push(subarr);
    }
    return result;
}

// Test: 
// Input: [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
// Output: [[0, 3, 6], [1, 4, 7], [2, 5, 8]]
let testTranspose1 = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
console.log(testTranspose1.transpose());

// Input: [[0, 1], [2, 3], [4, 5]]
// Output: [[0, 2, 4], [1, 3, 5]]
let testTranspose2 = [[0, 1], [2, 3], [4, 5]];
console.log(testTranspose2.transpose());