function countingSort(arr,maxValue){
    let bucket = new Array(maxValue + 1);
    let sortIndex = 0;
    let arrLen = arr.length;
    let bucketLen = bucket.length;
    for(let i = 0; i < arrLen; i++){
        if(!bucket[arr[i]]){
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }

    for(let j = 0; j < bucketLen; j++){
        while(bucket[j] > 0){
            arr[sortIndex++] = j;
            bucket[j]--
        }
    }
    return arr;
}