Array.prototype.bubbleSort = function () {
    let n = this.length;
    while (n > 0) {
        for (let i = 0; i < n - 1; i++) {
            if (this[i] > this[i + 1]) {
                let temp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = temp;
            }
        }
        n--;
    }
    return this;
}

// Test:
let testArr = [5, 1, 4, 2, 8];
console.log(testArr.bubbleSort());

String.prototype.substrings = function () {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++) {
            result.push(this.slice(i, j));
        }
    }
    return result;
}

let testString = "hello"
console.log(testString.substrings());