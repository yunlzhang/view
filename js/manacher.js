function manacher(str){
    // 字符串首尾加 ‘#’
    let temp = str.split('');
    let tempStr = '#' + temp.join('#') + '#';
    let len = tempStr.length;
    let pArr = []; //回文半径数组
    let c = -1; // 中心
    let r = -1; // 回文右半径 再往右一个位置
    let max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < len; i++){
        pArr[i] = r > i ? Math.min(pArr[2 * c - i], r - i): 1;

        while(i + pArr[i] < len && i - pArr[i] > -1){
            if(tempStr[i + pArr[i]] === tempStr[i - pArr[i]]){
                pArr[i]++;
            }else{
                break;
            }
        }

        if(i + pArr[i] > r){
            r = i + pArr[i];
            c = i;
        }

        max = Math.max(max, pArr[i]);
    }

    return max - 1;
}

console.log(manacher('abcdcba'));