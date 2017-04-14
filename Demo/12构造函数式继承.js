/**
 * Created by LLR on 2017/3/28.
 */
function SuperClass(id) {
    this.books = ['js','html','css'];
    this.id = id;
}
SuperClass.prototype.showBooks = function () {
    console.log(this.books);
}

function SubClass(id) {
    //继承父类
    SuperClass.call(this,id);
}
//创建第一个子类的实例
var instance1 = new SuperClass(1);
var instance2 = new SuperClass(2);

instance1.books.push("设计模式");
console.log(instance1.books);
console.log(instance1.id);
console.log(instance2.books);
console.log(instance2.id);


//-------------构造函数的继承方式是改变了父类函数的执行对象，子类实例化后只能继承到父类的共有属性，
//所以父类的原型方法不会被子类继承
console.log(instance1.showBooks());

