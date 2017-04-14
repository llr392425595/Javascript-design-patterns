/**
 * Created by LLR on 2017/3/29.
 */
//寄生式继承
//声明基对象

var book = {
    name:'js Book',
    alikeBook:['css book','html book']
};

function inheritObject(o){
    //声明一个过度函数对象
    function F() {};
    //过渡对象的原型继承父对象
    F.prototype = o;
    //返回过渡对象的一个实例，该实例的原型继承了父对象
    return new F();
}


function createBook(obj) {
    //通过原型继承方式创建新对象
    var o = new inheritObject(obj);
    //扩展新对象
    o.getName = function () {
        console.log(name);
    }

    //返回扩展后的新对象
    return o;
}























