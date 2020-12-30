function quickSort(arr,left,right){
    let len = arr.length;
    let partitionIndex;
    left = typeof left === 'number' ? left : 0;
    right = typeof right === 'number' ? right : len - 1;
    if(left < right){
        partitionIndex = partition(arr,left,right);
        quickSort(arr,left,partitionIndex - 1);
        quickSort(arr,partitionIndex+1,right);
    }
    return arr;
}
function partition(arr,left,right){
    let pivot = left;
    let index = pivot + 1;
    for(let i = index; i <= right; i++){
        if(arr[i] < arr[pivot]){
            swap(arr,i, index);
            index++;
        }
    }
    swap(arr,pivot,index - 1);
    return index - 1;
}

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/* let quickSort = arr => {
    quick(arr,0,arr.length - 1);
    return arr;
}

let quick = (arr, left, right) => {
    let index;
    if(left < right){
        index = partition(arr,left,right);
        if(left < index - 1){
            quick(arr,left,index - 1);
        }
        if(index < right){
            quick(arr,index, right);
        }
    }
}

let partition = (arr,left, right) => {
    var datum = arr[Math.floor(Math.random() * (right - left + 1) + left)],
    i = left,
    j = right;

    while(i <= j){
        while(arr[i] < datum){
            i++
        }
        while(arr[j] > datum){
            j--
        }

        if(i <= j){
            swap(arr,i,j);
            i++;
            j--;
        }
        if(arr[i] === arr[j] && i !== j){
            i++;
        }
    }

    return i;
}

let swap = (arr,i,j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
} */