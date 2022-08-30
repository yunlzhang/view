function swap(arr, i, j){
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function partition(arr, l, r){
    let pivot = arr[l];
    let lt = l;
    let gt = r + 1;
    for(let i = l+1; i < gt;){
        if(arr[i] === pivot){
            i++
        }else if(arr[i] > pivot){
            gt --;
            swap(arr,i,gt);
        }else{
            lt++;
            swap(arr,i,lt);
            i++;
        }
    }
    swap(arr,l,lt);
    lt--;
    // lt gt 对应位置均未排序
    return{
        lt,
        gt
    }
}

function quickSort(arr, l, r){
    if(l >= r) return;
    swap(arr, l, l + (Math.random() * (r - l) | 0));
    let obj = partition(arr, l, r);
    quickSort(arr, l, obj.lt);
    quickSort(arr, obj.gt, r);
}


function sort(arr){
    quickSort(arr, 0, arr.length - 1);
    return arr;
}


sort([1,2,5,1,4,3,2]);
