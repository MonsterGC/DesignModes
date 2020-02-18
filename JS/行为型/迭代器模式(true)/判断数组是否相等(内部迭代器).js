var each = function (arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        fun(i, arr[i])
    }
}
var compare = function (num1, num2) {
    let status = true;
    if (num1.length != num2.length) {
        return false;
    }
    each(num1, function (index, value) {
        if (num2[index] != value) {
            status = false
        }
    })
    return status;
}

console.log(compare([1, 2, 3], [1, 2, 3]))
console.log(compare([1, 2, 3], [1, 2, 3, 4]))
console.log(compare([1, 2, 3], [1, 3, 2]))
console.log(compare([1, 2], [1, 3, 2]))
console.log(compare([], [1, 3, 2]))