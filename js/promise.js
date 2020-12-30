const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise(excutor){
    let self = this;
    this.status = PENDING;
    this.onFullfilled = [];
    this.onRejected = [];
    function resolve(value){
        if(self.status === PENDING){
            self.status = FULFILLED;
            self.value = value;
            self.onFullfilled.forEach(fn => fn());
        }
    }
    function reject(reason){
        if(self.status === PENDING){
            self.status = REJECTED;
            self.reason = reason;
            self.onRejected.forEach(fn => fn());
        }
    }
    try{
        excutor(resolve, reject);
    }catch(e){
        reject(e);
    }
}

Promise.prototype.then = function(onFullfilled, onRejected){
    onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason};
    let self = this;
    let promise = new Promise((resolve, reject) => {
        const fulFillHandler = () => {
            setTimeout(() => {
                try{
                    let x = onFullfilled(self.value);
                    resolvePrimise(promise,x,resolve,reject);
                }catch(e){
                    reject(e);
                }
            })
        };
        const rejectHandler = () => {
            setTimeout(() => {
                try{
                    let x = onRejected(self.reason);
                    resolvePrimise(promise,x,resolve,reject);
                }catch(e){
                    reject(e);
                }
            })
        };
        if(self.status === FULFILLED){
            fulFillHandler();
        }else if(self.status === REJECTED){
            rejectHandler();
        }else{
            self.onFullfilled.push(fulFillHandler)
            self.onRejected.push(rejectHandler)
        }
    });
    return promise;
}

function resolvePromise(promise,x,resolve,reject){
    let self = this;
    if(promise === x){
        reject(new TypeError('chaining cycle'));
    }
    if(x && typeof x === 'object' || typeof x === 'function'){
        let used;
        try{
            let then = x.then;
            if(typeof then === 'function'){
                then.call(x,(y) => {
                    if(uesed) return;
                    used = true;
                    resolvePromise(promise,y,resolve,reject);
                },r => {
                    if(used) return;
                    used = true;
                    reject(r);
                })
            }else{
                if(used) return;
                used = true;
                resolve(x);
            }
        }catch(e){
            if(used) return;
            used = true;
            reject(e);
        }
    }else{
        resolve(x);
    }
}

Promise.prototype.catch = function(onRejected){
    return this.then(null, onRejected);
}

Promise.prototype.finally = function(callback){
    return this.then(value => {
        return Promise.resolve(callback()).then(() => {
            return value
        })
    }, err => {
        return Promise.resolve(callback()).then(() => {
            throw err;
        })
    });
}


Promise.resolve = function(param){
    if(param instanceof Promise){
        return param;
    }

    return new Promise((resolve,reject) => {
        if(param && typeof param === 'object' && typeof param.then === 'function'){
            setTimeout(() => {
                param.then(resolve,reject);
            })
        }else{
            resolve(param);
        }
    })
}

Promise.reject = function(reason){
    return new Promise((resolve,reject) => {
        reject(reason);
    })
}

Promise.all = function(promises){
    promises = Array.from(promises);
    return new Promise((resolve,reject) => {
        let index = 0;
        let result = [];
        if(promises.lenfth === 0){
            resolve(result);
        }
        function processValue(i,data){
            result[i] = data;
            if(++index === promises.length){
                resolve(result);
            }
        }
        for(let i = 0; i < promises.length; i++){
            Promise.resolve(promises[i]).then(data => {
                processValue(i,data);
            }, err => {
                reject(err);
            })
        }
    })
};

Promise.race = function(promises){
    promises = Array.from(promises);
    return new Promise((resolve,reject) => {
        if(promises.length === 0){
            return;
        }
        for(let i = 0; i< promises.length; i++){
            Promise.resolve(promises[i]).then(data => resolve(data),err => reject(err));
        }
    })
}