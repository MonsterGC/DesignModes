const iterator = function (arr) {
    let current = 0;

    const len = function () {
        return arr.length;
    }
    const next = function () {
        return current += 1;
    }
    const done = function () {
        return current >= arr.length;
    }
    const value = function () {
        return arr[current];
    }

    return {
        len,
        next,
        done,
        value
    }
}

// 测试数据
const num1 = [123, 123, 123];
const num2 = [12, 123, 123];
const iterator1 = iterator(num1);
const iterator2 = iterator(num2);

const num3 = [123, 123];
const num4 = [123, 123, 123];
const iterator3 = iterator(num3);
const iterator4 = iterator(num4);

const num5 = [123, 123, 123];
const num6 = [123, 123, 123];
const iterator5 = iterator(num5);
const iterator6 = iterator(num6);

const compare = function (iterator1, iterator2) {
    if (iterator1.len() != iterator2.len()) {
        return false;
    }
    while (!iterator1.done() && !iterator2.done()) {
        if (iterator1.value() != iterator2.value()) {
            return false;
        }
        iterator1.next();
        iterator2.next();
    }
    return true;
}

console.log(compare(iterator1, iterator2));
console.log(compare(iterator3, iterator4));
console.log(compare(iterator5, iterator6));