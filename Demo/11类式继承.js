/**
 * Created by LLR on 2017/3/27.
 */


// 类式继承





//声明父类
function SuperClass() {
    this.superValue = true;
}

//为父类添加共有方法
SuperClass.prototype.getSuperValue = function () {
    return this.superValue;
}

//声明子类
function SubClass() {
    this.subValue = false;
}

//继承父类
SubClass.prototype = new SuperClass();
//为子类添加共有方法
SuperClass.prototype.getsubValue = function () {
    return this.subValue;
}


//缺点：一个子类的实例更改了子类原型从父类构造函数中继承来的共有属性就会影响到其他子类
function SuperClass2() {
    this.books = ['js','html','css'];
}
function SubClass2() {}

SubClass2.prototype =new SuperClass2();

var instance1 = new SubClass2();
var instance2 = new SubClass2();
console.log(instance2.books);
instance1.books.push('设计模式');
console.log(instance2.books);


















