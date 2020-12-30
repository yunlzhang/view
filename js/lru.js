/**
 * 数组+对象
 */

/* var LRUCache = function(capacity){
    this.keys = [];
    this.cache = Object.create(null);
    this.capacity = capacity;
}

LRUCache.prototype.get = function(key){
    if(this.cache[key]){
        remove(this.keys,key);
        this.keys.push(key);
        return this.cache[key];
    }
    return -1;
}

LRUCache.prototype.put = function(key,value){
    if(this.cache[key]){
        this.cache[key] = value;
        remove(this.keys,key);
        this.keys.push(key);
    }else{
        this.keys.push(key);
        this.cache[key] = value;
        if(this.keys.length > this.capacity){
            removeCache(this.cache,this.keys,this.keys[0]);
        }
    }
}

function remove(arr,key){
    if(arr.length){
        const index = arr.indexOf(key);
        if(index > -1){
            return arr.splice(index,1);
        }
    }
}

function removeCache(cache,keys,key){
    cache[key] = null;
    remove(keys,key);
} */


/**
 * map
 */

var LRUCache = function(capacity){
    this.cache = new Map();
    this.capacity = capacity;
}

LRUCache.prototype.get = function(key){
    if(this.cache.has[key]){
        let temp = this.cache.get(key);
        this.cache.delete(key);
        thie.cache.set(key,temp);
        return temp;
    }
    return -1;
}

LRUCache.prototype.put = function(key,value){
    if(this.cache.has(key)){
        this.cache.delete(key);
    }else if(this.cache.size >= this.capacity){
        this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key,value);
}