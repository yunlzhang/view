// 大顶堆  第一个元素为最大值
// 小顶堆  第一个元素为最小值

let len;

function buildMaxHeap(arr){
    len = arr.length;
    for(let i = len >> 1; i >= 0; i--){
        heapify(arr,i);
    }
}

function heapify(arr,i){
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i;

    if(left < len && arr[left] > arr[largest]){
        largest = left;
    }

    if(right < len && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest !== i){
        swap(arr,i,largest);
        heapify(arr,largest);
    }
}

function swap(arr,i,j){
    [arr[i],arr[j]] = [arr[j],arr[i]];
}

function heapSort(arr){
    buildMaxHeap(arr);
    for(let i = arr.length - 1; i > 0; i--){
        swap(arr,0,i);
        len--;
        heapify(arr,0);
    }
    return arr;
}