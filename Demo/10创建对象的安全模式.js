/**
 * Created by LLR on 2017/3/27.
 */
var Book = function (title,time,type) {
    this.title = title;
    this.time = time;
    this.type = type;
};

var book1 = Book("11","22","33");

//函数在全局作用于直接执行
//并没有为新对象添加属性
console.log(book1);
//console.log(book1.title);  ----------undefined


//成为全局变量的属性
console.log(title);
console.log(time);
console.log(type);

/*-------------------安全模式，实例化对象时判断this是不是当前对象(如果是，说明是new创建的)-----------------------*/


var Book2 = function (title,time,type) {
    if(this instanceof Book){
        this.title = title;
        this.time = time;
        this.type = type;
    }else
        return new Book(title,time,type);
};

var book2 = Book2("a","b","c");

console.log(book2);