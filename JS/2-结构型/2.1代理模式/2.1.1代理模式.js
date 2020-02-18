// 律师类
var lawyer = function (name) {
    this.name = name;
}

lawyer.prototype.getName = function () {
    return this.name;
}

// 当事人类
var people = {
    callLawyer: function (name) {
        console.log(name + '请帮我辩护');
    }
}

// 代理对象
var getLawyer = {
    callLawyer: function (lawyer) {
        people.callLawyer(lawyer.getName());
    }
}


getLawyer.callLawyer(new lawyer('ZeroIce'));