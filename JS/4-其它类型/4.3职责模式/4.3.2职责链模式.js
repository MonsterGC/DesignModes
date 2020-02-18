// 下面用职责链模式改造代码：
const order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
        console.log('500 元定金预购，得到 100 元优惠券');
    } else {
        order200(orderType, pay, stock);
    }
};

const order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
        console.log('200 元定金预购，得到 50 元优惠券');
    } else {
        orderCommon(orderType, pay, stock);
    }
};

const orderCommon = function (orderType, pay, stock) {
    if (orderType === 3 && stock > 0) {
        console.log('普通购买，无优惠券');
    } else {
        console.log('库存不够，无法购买');
    }
};

order500(3, true, 500);