/**
 * Created by LLR on 2017/3/27.
 */
var Book = function (id,name,price) {
    //私有属性及私有方法
    var num = 1;
    function checkId() {
        return id;
    }
    //对象公有属性
    this.id = id;
    this.bookname = name;
    this.price = price;
    //对象公有方法
    this.copy= function () {};

    //构造器
    // this.setName(name);
    // this.setPrice(price);


    //特权方法：可以访问
    this.showNum = function () {
        return num;
    }

};

Book.prototype = {
    showId : function () {
        return this.id;
    },
    showBookNane : function () {
        return this.bookname;
    },
    showPrice : function () {
        return this.price;
    }
};


var book1 = new Book(10,"javascript","$100");

console.log(book1.showNum());
