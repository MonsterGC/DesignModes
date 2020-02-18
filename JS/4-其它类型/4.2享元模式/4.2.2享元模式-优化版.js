const Model = function (gender) {
    this.gender = gender;
}

Model.prototype.takePhoto = function () {
    console.log(`${this.gender}穿着${this.underwear}`);
};

const modelFactory = (function () {
    const modelGender = {};
    return {
        createModel: function (gender) {
            if (modelGender[gender]) {
                return modelGender[gender];
            }
            console.log('-------------------new-----------------------') // 测试优化的区别
            modelGender[gender] = new Model(gender);
            return modelGender[gender];
        }
    }
})();

const modelManager = (function () {
    const modelObj = {};
    return {
        add: function (gender, type) {
            modelObj[type] = {
                underwear: `第${type}款衣服`
            };
            return modelFactory.createModel(gender);
        },
        copy(model, type) {
            // 优化第二点
            model.underwear = modelObj[type].underwear;
        }
    }
})();

for (let i = 0; i <= 50; i++) {
    const maleModel = modelManager.add('male', i);
    modelManager.copy(maleModel, i)
    maleModel.takePhoto();
}