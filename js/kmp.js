// s主串 t模式串
function kmp(s,t){
    let sLen = s.length;
    let tLen = t.length;
    let next = [-1];
    for(let i = 1, j = -1; i < tLen; i++){
        while(j !== -1 && t[i] !== t[j+1]){
            j = next[j]
        }
        if(t[i] === t[j + 1]){
            j++;
        }
        next[i] = j;
    }

    for(let i = 0, j = -1; i < sLen; i++){
        while(j !== -1 && s[i] !== t[j + 1]){
            j = next[j];
        }
        if(s[i] === t[j + 1]){
            j++;
        }
        if(j === tLen - 1){
            console.log(i - j);
            return true;
        }
    }
    return false;
}

function kmp2(s, t){
    let sLen = s.length;
    let tLen = t.length;

    let next = getNext(t);
    let i = 0; let j = -1;

    while(i < sLen && j < tLen - 1){
        if(s[i] === t[j + 1]){
            i++;
            j++;
        }else if(j === -1){
            i++;
        }else{
            j = next[j];
        }
    }
    // console.log(i - j - 1);
    return j === tLen - 1 ? true : false;

    function getNext(t){
        let tLen = t.length;
        let next = [-1];
        let i = 1, j = -1;
        // 前缀最大值减1;
        while(i < tLen){
            if(t[i] === t[j + 1]){
                next[i++] = ++j;
            }else if(j === -1){
                next[i++] = -1;
            }else{
                j = next[j]
            }
        }
        return next;
    }
}


console.log(kmp('aaaabaab', 'ba'));