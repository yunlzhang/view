// 快速幂运算
function pow(a,n){
    let ret = 1;
    while(n > 0){
        if(n & 1 === 1){
            ret = ret * a;
        }
        n >>= 1;
        a = a * a;
    }
    return ret;
    
}