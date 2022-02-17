function quickSort(arr, left, right){
    if(left >= right) return;
    swap(arr, parseInt(Math.random() * (right - left + 1)) + left, left);
    let indexes = partition(arr,left, right);
    quickSort(arr,left, indexes[0]);
    quickSort(arr,indexes[1] + 1, right);
}

function partition(arr, left, right){
    // 选最右边元素作为基准
    // let less = left - 1;
    // let more = right;
    // // 将数组切分为[<privot, =privot, >privot]三部分
    // while(left < more){
    //     if(arr[left] < arr[right]){
    //         less++;
    //         left++;
    //     }else if(arr[left] > arr[right]){
    //         swap(arr,--more,left);
    //     }else{
    //         left++;
    //     }
    // }
    // swap(arr,more,right);

    // 选最左元素作为基准
    let less = left;
    let more = right + 1;
    while(less < right){
        if(arr[left] < arr[right]){
            right--;
            more--;
        }else if(arr[left] > arr[right]){
            swap(arr,++less,right);
        }else{
            right--;
        }
    }
    swap(arr,less,left);
    return [less,more];
}

function swap(arr,key1,key2){
    [arr[key1],arr[key2]] = [arr[key2], arr[key1]];
}

let arr = [2,3,1,5,111,23,12];
quickSort(arr,0, arr.length - 1);
console.log(arr);
