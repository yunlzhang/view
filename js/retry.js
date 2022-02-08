Promise.retry = function(fn,limit){
    return new Promise((resolve,reject) => {
        return fn(res => {
            resolve(res)
        },err => {
            if(limit > 1){
                return Promise.retry(fn,limit - 1);
            }
            reject(err);
        });
    })
}

Promise.retry = function(fn,limit = 3){
    return new Promise(async (resolve,reject) => {
        while(limit--){
            console.log(limit);
            try{
                let ret = await fn();
                resolve(ret);
                break;// 中断while循环
            }catch(e){
                if(!limit) reject(e);
            }
        }
    })
}


function getProm() {
    const n = Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() =>  n > 0.9 ? resolve(n) : reject(n), 1000);
    });
}
Promise.retry(getProm);