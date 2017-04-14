/**
 * Created by LLR on 2017/3/28.
 */
function SuperClass(name) {
    this.name = name;
    this.books = ['js','html','css'];
}
SuperClass.prototype.getName= function () {
    console.log(this.name);
}

function SubClass(name,time) {
    //继承父类
    SuperClass.call(this,name);
    this.time = time;
}
SubClass.prototype = new SuperClass();

SubClass.prototype.getTime = function () {
    console.log(this.time);
}

//创建第一个子类的实例
var instance1 = new SubClass('js Book', 2015);
var instance2 = new SubClass('a',2011);
instance1.books.push('设计模式');



console.log(instance1.books);
console.log(instance2.books);
instance1.getName();
instance1.getTime();



