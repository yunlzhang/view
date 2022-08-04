function run(gen){
    return new Promise((resolve, reject) => {
        if(typeof gen === 'function') gen = gen();

        if(!gen || typeof gen.next !== 'function') return resolve(gen);
        onFulfilled();
        function onFulfilled(res){
            var ret;
            try{
                ret = gen.next(res);
            }catch(e){
                return reject(e);
            }
            next(ret);
        }
        function onRejected(reason){
            var ret;
            try{
                ret = gen.throw(reason)
            }catch(e){
                return reject(e);
            }
            next(ret);
        }

        function next(ret){
            if(ret.done) return resolve(ret.value);
            var value = toPromise(ret.value);
            if(value && isPromise(value)) return value.then(onFulfilled,onRejected);
            return onRejected(new TypeError('You may only yield a function promise,but the following object was passed:' + String(ret.value)));
        }
    })
}

function isPromise(obj){
    return typeof obj.then === 'function';
}

function toPromise(obj){
    if(isPromise(obj)) return obj;
    if(typeof obj === 'function') return thunkToPromise(obj);
    // co 函数 yield 只能跟promise 或 thunk函数
    return obj;
}

function thunkToPromise(fn){
    return new Promise(function(resolve,reject){
        fn(function(err,res){
            if(err) return reject(err);
            resolve(res);
        })
    })
}

function* test(){
    var a = yield Promise.resolve(123);
    var b = yield Promise.resolve(456);
    var c = yield Promise.resolve(789);
    // return [a, b, c];
}

run(test)
.then(res => {
    console.log(res);
})