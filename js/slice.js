/**
数组splice方法实现

arr.splice(startIdx,delCount,add1,add2,...);
*/
Array.prototype._splice = function () {
    //1. 记录入参个数
    let argumentsLen = arguments.length;
    let start = arguments[0],
        deleteCount = arguments[1];
    //2. 数组长度
    let arrayLength = this.length;
    let arr = Object(this);
    //3. 添加元素个数
    let addCount = argumentsLen > 2 ? argumentsLen - 2 : 0;
    console.log("addCount: ", addCount);
    //4. 计算有效的开始位置start
    let startIdx = computeSpliceStartIdx(start, arrayLength);
    //5. 计算有效的删除个数
    let delCount = computeSpiceDelCount(startIdx, deleteCount, arrayLength);

    console.log("delCount: ", delCount);
    //6. 记录删除的元素
    let delElements = new Array(delCount);
    recordDelElements(startIdx, delCount, arr, delElements);
    //7. 判断是否是密封对象
    if (delCount !== addCount && Object.isSealed(arr)) {
        throw new TypeError("the arr is sealed");
    }
    //8. 判断是否是冻结对象
    if (delCount > 0 && addCount > 0 && Object.isFrozen(arr)) {
        throw new TypeError("the arr is frozen");
    }
    //移动数组元素
    moveElements(startIdx, delCount, arr, addCount);
    let i = startIdx;
    let argumentsIdx = 2;
    //插入新的元素
    while (argumentsIdx < argumentsLen) {
        arr[i++] = arguments[argumentsIdx++];
    }
    arr.length = arrayLength - delCount + addCount;
    return delElements;
};
function computeSpliceStartIdx(start, arrayLength) {
    if (start < 0) {
        start += arrayLength;
        return start < 0 ? 0 : start;
    }
    //start>0的情况
    return start > arrayLength - 1 ? arrayLength - 1 : start;
}
//计算delCount
function computeSpiceDelCount(startIdx, deleteCount, arrayLength) {
    if (deleteCount > arrayLength - startIdx) {
        deleteCount = arrayLength - startIdx;
    }
    if (deleteCount < 0) deleteCount = 0;
    return deleteCount;
}
//记录删除的元素
function recordDelElements(startIdx, delCount, arr, delElements) {
    for (let i = 0; i < delCount; i++) {
        delElements[i] = arr[startIdx + i];
    }
}
//移动数组
function moveElements(startIdx, delCount, arr, addCount) {
    let over = addCount - delCount;
    console.log("over: ", over);
    if (over > 0) {
        //增加的数大于了删除的数 向后移动
        for (let i = arr.length - 1; i >= startIdx + delCount; i--) {
            arr[i + over] = arr[i];
        }
    } else if (over < 0) {
        //增加的数小于删除的数 向前移动
        for (let i = startIdx + delCount + over; i <= arr.length - 1; i++) {
            if (i + Math.abs(over) > arr.length - 1) {
                delete arr[i];
                continue;
            }
            arr[i] = arr[i + Math.abs(over)];
        }
        console.log("arr: over<0", arr);
    }
}
let arr = [1, 2, 3, 4, 5];
arr._splice(1, 3, 6, 7);
console.log("arr: ", arr); //arr: [ 1, 6, 7, 5 ]
