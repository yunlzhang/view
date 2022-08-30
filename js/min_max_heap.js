const COMPARE_NUM = {
    less: -1,
    great: 1,
    equal: 0,
}
function defaultCompreFn(i, j){
  if(i - j === COMPARE_NUM.equal) return COMPARE_NUM.equal;
  return i > j ? COMPARE_NUM.great : COMPARE_NUM.less;
}

class minHeap {
    constructor(compareFn = defaultCompreFn){
        this.heap = [];
        this.compareFn = compareFn;
    }

    getLeftIndex(index) {
        return 2 * index + 1;
    }

    getRightIndex(index){
        return 2 * index + 2;
    }

    getParentIndex(index){
        if(index === 0) return;
        return (index - 1) >> 1;
    }

    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(value){
        if(value !== null) {
            this.heap.push(value);
            this.shiftUp(this.heap.length - 1);
            return true;
        }
        return false;
    }

    shiftUp(index){
        let parentIndex = this.getParentIndex(index);
        while(index >0 && this.compareFn(this.heap[index],this.heap[parentIndex]) === COMPARE_NUM.less){
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = thiis.getParentIndex(parentIndex);
        }
    }

    extract() {
        if(this.heap.length === 0) return;
        if(this.heap.length === 1) return this.heap.shift();
        const removedValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
        return removedValue;
    }

    shiftDown(index){
        let tempIndex = index;
        let leftIndex = this.getLeftIndex(index);
        let rightIndex = this.getRightIndex(index);
        if(leftIndex < this.heap.length && this.compareFn(this.heap[leftIndex], this.heap[tempIndex]) === COMPARE_NUM.less){
            tempIndex = leftIndex;
        }
        if(rightIndex < this.heap.length && this.compareFn(this.heap[rightIndex], this.heap[tempIndex]) === COMPARE_NUM.less){
            tempIndex = rightIndex;
        }

        if(tempIndex !== index) {
            this.swap(tempIndex, index);
            this.shiftDown(tempIndex);
        }
    }
}