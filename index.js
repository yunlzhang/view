const getMostRepeatLetters = (str) => {
    if(!str) return 0;
    let win = [];
    let most = 0;
    for(let char of str){
        if(win[win.length - 1] && win[win.length - 1] !== char){
            win = [];
        }
        win.push(char);
        most = Math.max(most,win.length)
    }
    return most;
}

function is(x,y){
    if(x === y){
        // +0 -0
        return x !== 0 || 1/x === 1/y;
    }else{
        //NaN NaN
        return x !== y && y !== x;
    }
}


function findIndex(arr,target){
    const len = arr.length;
    let left = 0;
    let right = len - 1;
    let ret = -1;
    while(left <= right){
        const mid = ((right - left) >> 1) + left;
        const val = arr[mid];
        if(val >= target){
            if(val === target){
                ret = mid;
                break;
            }
            right  = mid - 1;
        }else{
            left = mid + 1;
        }
    }

    return ret;
}

// console.log(findIndex([1,2,3,4,5,6],6))
const removeDuplicate = (arr) => {
    arr.sort();
    let len = 1;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== arr[i - 1]) arr[len++] = arr[i]
    }
    console.log(arr);
    console.log(len);
    arr.splice(len);
    return arr;
}

// console.log(removeDuplicate([1,2,3]))


const permute = (nums) => {
    const res = [];
    const used = {};
  
    function dfs(path) {
        debugger;
      if (path.length == nums.length) {
        res.push(path.slice());
        return;
      }
      for (const num of nums) {
        // if (path.includes(num)) continue; // 查找的时间是O(n)，别这么写，时间复杂度增加
        if (used[num]) continue;
        path.push(num);
        used[num] = true;
        dfs(path);
        path.pop();
        used[num] = false;
      }
    }
  
    dfs([]);
    return res;
  };
console.log(permute([1,2,3]));