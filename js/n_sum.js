// n数之和
// 常见解法 双指针 回溯
// 参考 https://github.com/sisterAn/JavaScript-Algorithms/issues/128

/**
 * 
 * @param {*} arr 
 * @param {*} count 
 * @param {*} sum 
 */
const search = (arr,count,sum) => {
    const getCount = num => {
        let count = 0;
        while(num){
            num &= (num - 1);
            count ++;
        }
        return count;
    }

    let len = arr.length;
    let bit = 1 << len;
    let res = [];
    for(let i = 0; i < bit; i++){
        if(getCount(i) === count){
            let s = 0;
            let temp = [];
            for(let j = 0; j < len; j++){
                if(i & 1 << (len - 1 - j)){
                    s += arr[j];
                    temp.push(arr[j]);
                }
            }
            if(s === sum){
                res.push(temp);
            }
        }
    }
    return res;
}