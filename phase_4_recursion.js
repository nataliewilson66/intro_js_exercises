let range = function (start, end) {
    if (start === end) {
        return [end];
    } else {
        let result = range(start + 1, end);
        result.unshift(start);
        return result;
    }
}

// Test:
console.log(range(1, 5));

let sumRec = function (arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        return arr.pop() + sumRec(arr);
    }
}

// Test:
let test = [1, 2, 3, 4, 5];
console.log(sumRec(test));

let exponentV1 = function (b, n) {
    if (n === 0) {
        return 1;
    } else {
        return b * exponentV1(b, n - 1);
    }
}

// Test:
console.log(exponentV1(2, 3));
console.log(exponentV1(12, 2));

let exponentV2 = function (b, n) {
    if (n === 0) {
        return 1;
    } else if (n === 1) {
        return b;
    } else if (n % 2 === 0) {
        return exponentV2(b, n / 2) ** 2;
    } else {
        return b * (exponentV2(b, (n - 1) / 2) ** 2);
    }
} 

// Test:
console.log(exponentV2(2, 3));
console.log(exponentV2(12, 2));

let fibonacci = function (n) {
    if (n === 0)  {
        return [0];
    } else if (n === 1) {
        let arr = fibonacci(n - 1);
        arr.push(1)
        return arr;
    } else {
        let arr = fibonacci(n - 1);
        let elem1 = arr[n - 1];
        let elem2 = arr[n - 2];
        arr.push(elem1 + elem2);
        return arr;
    }
}

// Test:
console.log(fibonacci(5));
console.log(fibonacci(12));

let deepDup = function (ogArr) {
    let dupArr = [];
    if (typeof(ogArr) !== 'object' || ogArr === null) {
        return ogArr;
    }

    for (idx in ogArr) {
        let value = ogArr[idx];
        dupArr[idx] = deepDup(value);
    }
    return dupArr;
}

// Test:
let ogArr = [[1], [2], [3, 4]];
let shallowCopy = ogArr.slice();
let deepCopy = deepDup(ogArr);

ogArr[0] = 1;
ogArr[2][0] = "hello";
console.log(ogArr);
console.log(shallowCopy);
console.log(deepCopy);

let bsearch = function (arr, target) {
    
    let bsearchHelper = function (arr, lo, hi) {
        if (lo > hi) {
            return -1;
        } else {
            let mid = (lo + hi) / 2;
            if (target === arr[mid]) {
                return mid;
            } else if (target < arr[mid]) {
                return bsearchHelper(arr, lo, mid - 1);
            } else {
                return bsearchHelper(arr, mid + 1, hi);
            }
        }
    }

    return bsearchHelper(arr, 0, arr.length);
}

// Test:
let testBSearch = [1, 4, 5, 7, 12, 26];
console.log(bsearch(testBSearch, 12));
console.log(bsearch(testBSearch, 13));

let  mergesort = function (arr, p, r) {
    if (p >= r) {
        return;
    }

    let merge = function (arr, p, q, r) {
        let n1 = q - p + 1;
        let n2 = r - q;
        let L = [];
        let M = [];

        for (let i = 0; i < n1; i++) {
            L[i] = arr[p + i];
        }
        for (let i =  0; i < n2; i++) {
            M[i] = arr[q + 1 + i];
        }

        let i = 0;
        let j = 0;
        let k = p;
        while (i < n1 && j < n2) {
            if (L[i] <= M[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = M[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
        while (j < n2) {
            arr[k] = M[j];
            j++;
            k++;
        }
    }

    let q = Math.floor((p + r) / 2);
    mergesort(arr, p, q);
    mergesort(arr, q + 1, r);
    merge(arr, p, q, r);
}

// Test:
let testMergeSort = [12, 13, 1, 5, 6, 24, 9, 0];
mergesort(testMergeSort, 0, testMergeSort.length - 1);
console.log(testMergeSort);


let subsets = function (arr) {
    if (arr.length === 1) {
        return [[], arr];
    } else {
        let lastElem = arr.pop();
        let lastSets = subsets(arr);
        let newSets = deepDup(lastSets);
        newSets.map(x => x.push(lastElem));
        newSets.forEach(x => lastSets.push(x));
        return lastSets;
    }
}

// Test:
let testSubsets = [1, 2];
console.log(subsets(testSubsets));
