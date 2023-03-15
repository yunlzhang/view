/**
 * 1、创建一个空的对象
 * 2、链接该对象（设置对象的__proto__）到另外一个对象
 * 3、将步骤1创建的对象作为this的上下文
 * 4、函数没有返回对象，则返回创建的这个对象，否则返回对象
 */

/**
 * 创建一个空的简单 JavaScript 对象（即{}）；
 * 为步骤 1 新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
 * 将步骤 1 新创建的对象作为this的上下文 ；
 * 如果该函数没有返回对象，则返回this。
 */

function objectFactory(){
    var obj = new Object();
    var Constructor = [].shift.call(arguments);
    // obj.__proto__ = Constructor.prototype; 
    Object.setPrototypeOf(obj, Constructor.prototype);
    var ret = Constructor.apply(obj,arguments);
    // ret = null
    return typeof ret === 'object' ? ret || obj : obj;
}


// 构造函数若不需要传参数， new 调用可以不加括号  new Object 等价于new Object()