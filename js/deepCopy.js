const deepTag = {
    mapTag: '[object Map]',
    setTag: '[object Set]',
    arrayTag: '[object Array]',
    objectTag: '[object Object]',
    argumentsTag: '[object Arguments]'
};
const shallowTag = {
    booleanTag: '[object Boolean]',
    dateTag: '[object Date]',
    numberTag: '[object Number]',
    stringTag: '[object String]',
    symbolTag: '[object Symbol]',
    errorTag: '[object Error]',
    regexpTag: '[object RegExp]',
    functionTag: '[object Function]'
}

function isObject(target){
    const type = typeof target;
    return target !== null && ['function', 'object'].includes(type)
}

function forEach(array, func) {
    let index = -1;
    const length = array.length;
    while(++index < length){
        func(array[index], index);
    }
    return array;
}

function getType(target) {
    return Object.prototype.toString.call(target);
}

function getInit(target) {
    const Ctor = target.constructor;
    return new Ctor();
}

function cloneSymbol(target){
    return Object(Symbol.prototype.valueOf.call(target));
}

function cloneReg(target){
    const reFlags = /\w+$/;
    const result = new target.constructor(target.source, reFlags.exec(target))
    result.lastIndex = target.lastIndex;
    return result;
}

function cloneFunction(target){
    const string = target.toString();
    return eval('('+string+')');
}

function cloneOtherType(target, type){
    const Ctor = target.constructor;
    switch(type) {
        case shallowTag.booleanTag:
        case shallowTag.numberTag:
        case shallowTag.stringTag:
        case shallowTag.errorTag:
        case shallowTag.dateTag:
            return new Ctor(target);
        case shallowTag.regexpTag:
            return cloneReg(target);
        case shallowTag.symbolTag:
            return cloneSymbol(target);
        case shallowTag.functionTag:
            return cloneFunction(target);
        default:
            return null
    }
}

function clone(target, map = new WeakMap()){
    if(!isObject(target)){
        return target;
    }

    const type = getType(target);
    let cloneTarget;
    if(Object.values(deepTag).includes(type)){
        cloneTarget = getInit(target, type);
    }else {
        return cloneOtherType(target, type);
    }

    if(map.get(target)) {
        return target;
    }
    map.set(target, cloneTarget);
    if(type === deepTag.setTag) {
        target.forEach(value => {
            cloneTarget.add(clone(value));
        })
        return cloneTarget;
    }

    if(type === deepTag.mapTag) {
        target.forEach((value, key) => {
            cloneTarget.set(key, clone(value));
        })
        return  cloneTarget;
    }

    const keys = type === deepTag.arrayTag ? undefined : Object.keys(target);

    forEach(keys || target, (value, key) => {
        if(keys) {
            key = value;
        }
        cloneTarget[key] = clone(target[key], map);
    })
    return cloneTarget;
}