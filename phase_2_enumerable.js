Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

// Test:
function printOne(elem) {
    console.log(elem);
}
let testArr = ["hello", "world", "!"];
console.log(testArr.myEach(printOne));


Array.prototype.myReduce = function (callback, initialValue) {
    let arr = this;

    if (initialValue === undefined) {
        initialValue = arr[0];
        arr = arr.slice(1);
    }

    let result = initialValue;
    arr.forEach(el => result = callback(result, el));
    return result;
}

// Test 1:
let test1 = [1, 2, 3];
let result1 = test1.myReduce(function (acc, el) {
    return acc + el;
});
console.log(result1);

// Test 2:
let test2 = [1, 2, 3];
let result2 = test2.myReduce(function (acc, el) {
    return acc + el;
}, 10);
console.log(result2);