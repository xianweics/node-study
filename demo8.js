// util.inherits: 只会继承super 原型上的方法，不能继承构造函数里的属性很方法
/*
* .isArray()
* .isRegExp()
* .isDate()
* .isError()
* */
let util = require("util");
function Base() {
    this.name = 'base';
    this.age = 15;
    this.getAge = function () {
        return this.age;
    }
}

Base.prototype.showName = function () {
    return this.name;
};

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base);
let sub = new Sub();
console.info(sub.showName());


