const A = function (num) {
    return num * 4;
}

const B = function (num) {
    return num * 3;
}

const C = function (num) {
    return num * 2;
}

const D = function (num) {
    return num * 1;
}

const getFun = function (fun, num) {
    return fun(num);
}


console.log(getFun(A, 1000))
console.log(getFun(B, 1000))
console.log(getFun(C, 1000))
console.log(getFun(D, 1000))