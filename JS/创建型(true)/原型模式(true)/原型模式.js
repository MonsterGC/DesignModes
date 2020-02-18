var vehiclePrototype = {
    model:"保时捷",
    getModel: function () {
        console.log('车辆模具是：' + this.model);
    }
};

var vehicle = Object.create(vehiclePrototype,{
    "model":{
        value:"法拉利"
    }
});

var cart = Object.create(vehiclePrototype,{
    "cat":{
        value:function(mode){
            console.log('我是',mode)
        }
    }
});

vehicle.getModel();
cart.cat('猫');