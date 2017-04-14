/**
 * Created by LLR on 2017/3/27.
 */
var Book = (function () {
    //静态私有变量
    var bookNum = 0;
    //静态私有方法
    function checkBook(name) {};

    //创建类
    function _book(newId,newName,newPrice) {
        //私有变量
        var name,price;
        //私有方法
        function checkId(id) {};
        //特权方法
        this.getName = function () {
            return name;
        };
        this.getPrice = function () {
            return price;
        };
        this.setName = function (na) {
            name = na;
        };
        this.setPrice = function (pr) {
            price = pr;
        };

        //公有属性
        this.id = newId;
        //公有方法
        this.copy = function () {
            return new _book(newId,newName,newPrice);
        };

        bookNum++;
        //构造器
        this.setName(newName);
        this.setPrice(newPrice);

    }

    _book.prototype = {
        //静态公有属性
        isJsBook:true,
        display:function () {
            console.log("书名：" + this.getName() + "  价格：" + this.getPrice());
        },
        cmputeNum:function () {
            console.log(bookNum);
        }
    };

    return _book;
})();

var book1 = new Book("1","js设计模式",100);

var book2 = new Book("2","js设计模式",100);

book1.display();

book2.cmputeNum();