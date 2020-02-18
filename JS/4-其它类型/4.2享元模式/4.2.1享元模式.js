const Model1 = function (gender, underwear) {
    this.gender = gender;
    this.underwear = underwear;
};

Model1.prototype.takePhoto = function () {
    console.log(`${this.gender}穿着${this.underwear}`);
};

for (let i = 1; i <= 50; i++) {
    console.log('---------------new--------------') // 测试后面优化
    const maleModel = new Model1('male', `第${i}款衣服`);
    maleModel.takePhoto();
}

for (let i = 1; i <= 50; i++) {
    const female = new Model1('female', `第${i}款衣服`);
    female.takePhoto();
}