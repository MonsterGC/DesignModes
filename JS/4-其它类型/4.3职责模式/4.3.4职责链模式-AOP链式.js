const new2Order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
        console.log('500 元定金预购，得到 100 元优惠券');
    } else {
        return 'nextSuccess';
    }
};

const new2Order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
        console.log('200 元定金预购，得到 50 元优惠券');
    } else {
        return 'nextSuccess';
    }
};

const new2OrderCommon = function (orderType, pay, stock) {
    if (orderType === 3 && stock > 0) {
        console.log('普通购买，无优惠券');
    } else {
        console.log('库存不够，无法购买');
    }
};

// // 链路代码
// Function.prototype.after = function (fn) {
//     const self = this;
//     return function () {
//         const result = self.apply(self, arguments);
//         if (result === 'nextSuccess') {
//             return fn.apply(self, arguments); // 这里 return 别忘记了~
//         }
//     };
// };

// // 链路代码
// 防止污染原生代码
const after = function (fn, afterFn) {
    const self = this;
    return function () {
        const result = fn.apply(self, arguments);
        if (result === 'nextSuccess') {
            return afterFn.apply(self, arguments); // 这里 return 别忘记了~
        }
    };
};

const newOrder = after(after(new2Order500, new2Order200), new2OrderCommon);

newOrder(3, true, 500); // 普通购买，无优惠券