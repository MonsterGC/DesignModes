// 将状态封装成不同类
const WeakLight = function (light) {
    this.light = light;
};

WeakLight.prototype.press = function () {
    console.log('打开强光');
    this.light.setState(this.light.strongLight);
};

const StrongLight = function (light) {
    this.light = light;
};

StrongLight.prototype.press = function () {
    console.log('关灯');
    this.light.setState(this.light.offLight);
};

const OffLight = function (light) {
    this.light = light;
};

OffLight.prototype.press = function () {
    console.log('打开弱光');
    this.light.setState(this.light.weakLight);
};

const Light = function () {
    this.weakLight = new WeakLight(this);
    this.strongLight = new StrongLight(this);
    this.offLight = new OffLight(this);
    this.currentState = this.offLight; // 初始状态
};

Light.prototype.init = function () {
    const btn = document.createElement('button');
    btn.innerHTML = '按钮';
    document.body.append(btn);
    const self = this;
    btn.addEventListener('click', function () {
        self.currentState.press();
    });
};

Light.prototype.setState = function (state) {
    // 改变当前状态
    this.currentState = state;
};

const light = new Light();
light.init();