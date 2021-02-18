function objectFactory(){
    var obj = new Object();
    var Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj,arguments);
    return typeof ret === 'obj' && ret !== null ? ret : obj;
}