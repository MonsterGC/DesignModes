var Student = (function(){
    var instance = null;
    function Student(name){
        this.name = name;
    }
    return function(name){
        if(!instance){
            instance = new Student(name);
        }
        return instance;
    }
})()

//测试
var student1 = new Student('ZeroIce');
var student2 = new Student('TW&Ck');
console.log(student1===student2);