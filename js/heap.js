/**
 * 
 * 堆是完全二叉树， 假设二叉树深度为h，除了第h层外，其他层节点树都达到最大个数，第h层所有节点集中在最左端
 * 
 */


/**
 * 构建小根堆 从前往后，自下而上式构建
 */
// function buildHeap(items,heapSize){
//     while(heapSize < items.length - 1){
//         heapSize++;
//         heapify(items,heapSize);
//     }
// }

// function heapify(items,i){
//     while(i >> 1 > 0 && items[i] < items[i >> 1]){
//         swap(items,i, i >> 1);
//         i = i >> 1;
//     }
// }

// function swap(items,i, j){
//     [items[i],items[j]] = [items[j],items[i]];
// }


/**
 * 从后往前，自上而下式堆化建堆
 * 从最后一个非叶子节点开始
 */
function buildHeap(items){
    let heapSize = items.length;
    for(let i = heapSize >> 1; i >= 1; i--){
        heapify(items,heapSize,i);
    }
}

function heapify(items,heapSize,i){
    while(true){
        let maxIndex = i;
        if(2 * i <= heapSize && items[i] > items[2 * i]){
            maxIndex = 2 * i;
        }
        if(2 * i + 1 <= heapSize && items[maxIndex] > items[2 * i + 1]){
            maxIndex = 2 * i + 1;
        }
        if(maxIndex === i) break;
        swap(items,i,maxIndex);
        i = maxIndex;
    }
}


function swap(items,i, j){
    [items[i],items[j]] = [items[j],items[i]];
}