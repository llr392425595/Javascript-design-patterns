/**
 * Created by LLR on 2017/3/28.
 */

//原型式的继承缺点与类式继承一样

function inheritObject(o){
    //声明一个过度函数对象
    function F() {};
    //过渡对象的原型继承父对象
    F.prototype = o;
    //返回过渡对象的一个实例，该实例的原型继承了父对象
    return new F();
}

var book = {
    name : "js Book",
    alikeBook : ["css book","html book"]
};

// book.prototype.getName = function () {
//     console.log(this.name);
// }

var newBook = inheritObject(book);
newBook.name = 'ajax book';
newBook.alikeBook.push("xml Book");


var otherBook = inheritObject(book);
otherBook.name  = "flash book";
otherBook.alikeBook.push('as book');


console.log(newBook.name);

console.log(newBook.alikeBook);

console.log(otherBook.name);

console.log(otherBook.alikeBook);






















































