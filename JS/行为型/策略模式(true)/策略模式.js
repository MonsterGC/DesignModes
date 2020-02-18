var strategy = {
    A: function (num) {
        return num * 4
    },
    B: function (num) {
        return num * 3
    },
    C: function (num) {
        return num * 2
    },
    D: function (num) {
        return num * 1
    }
}

var getLevel = function (level, num) {
    return strategy[level](num);
}

console.log(getLevel('A', 1000))
console.log(getLevel('B', 1000))
console.log(getLevel('C', 1000))
console.log(getLevel('D', 1000))