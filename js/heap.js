// /**
//  * 
//  * 堆是完全二叉树， 假设二叉树深度为h，除了第h层外，其他层节点树都达到最大个数，第h层所有节点集中在最左端
//  * 
//  */

// 完全二叉树结点知识  
// 度 ： 二叉树的子节点的数量， 取值0、1、2
//1) 度为1取值只能是0 和 1
//2) n = n0 + n1 + n2
//3) n0 = n2 + 1;
// n为奇数 n1 = 0; n0 = n - n2  = (n + 1) / 2;
// n为偶数 n1 = 1; n0 = n - n2 - 1 = n / 2;




/**
 * 从后往前，自上而下式堆化建堆
 * 从最后一个非叶子节点开始
 */
function buildMaxHeap(items){
    let heapSize = items.length;
    // 从非叶子结点开始处理
    for(let i = heapSize >> 1; i >= 0; i--){
        heapify(items,heapSize,i);
    }
}

function heapify(items,heapSize,i){
    while(true){
        let maxIndex = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2
        if(left <= heapSize && items[maxIndex] < items[left]){
            maxIndex = left;
        }
        if(right <= heapSize && items[maxIndex] < items[right]){
            maxIndex = right;
        }
        if(maxIndex === i) break;
        swap(items,i,maxIndex);
        i = maxIndex;
    }
}


function swap(items,i, j){
    // items[i] = items[i] ^ items[j];
    // items[j] = items[i] ^ items[j];
    // items[i] = items[i] ^ items[j];
    [items[i],items[j]] = [items[j],items[i]];
}

const arr = [3,4,5,6,1,2,3,4,0,1,2,7,111]
buildMaxHeap(arr);
console.log(arr);