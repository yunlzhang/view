/**
 * 1、创建一个空的对象
 * 2、链接该对象（设置对象的__proto__）到另外一个对象
 * 3、将步骤1创建的对象作为this的上下文
 * 4、函数没有返回对象，则返回创建的这个对象，否则返回对象
 */

function objectFactory(){
    var obj = new Object();
    var Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;

    var ret = Constructor.apply(obj,arguments);
    // ret = null
    return typeof ret === 'object' ? ret || obj : obj;
}