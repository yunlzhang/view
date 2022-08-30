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