let wear = function () {
    console.log('穿上第一件衣服');
};

const _wear1 = wear;

wear = function () {
    _wear1();
    console.log('穿上第二件衣服');
};

const _wear2 = wear;

wear = function () {
    _wear2();
    console.log('穿上第三件衣服');
};

wear();
// 缺点：1：临时变量会变得越来越多；2：this 指向有时会出错