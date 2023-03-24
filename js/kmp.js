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

    console.log(next);

    for(let i = 0, j = -1; i < sLen; i++){
        while(j !== -1 && s[i] !== t[j + 1]){
            j = next[j];
        }
        if(s[i] === t[j + 1]){
            j++;
        }
        if(j === tLen - 1){
            return true;
        }
    }
    return false;
}

console.log(kmp('aaaabaab', 'aabaa'));

debugger;