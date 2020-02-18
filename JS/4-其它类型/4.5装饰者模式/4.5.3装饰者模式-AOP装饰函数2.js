// 防止污染原生函数
const after = function (fn, afterFun) {
    return function () {
        fn.apply(this, arguments);
        afterFun.apply(this, arguments);
    }
}

const wear1 = function () {
    console.log('穿上第一件衣服');
};

const wear2 = function () {
    console.log('穿上第二件衣服');
};

const wear3 = function () {
    console.log('穿上第三件衣服');
};

const newWear = after(after(wear1, wear2), wear3);
newWear();