class PriorityQueue{
    constructor(arr = [], compare = (x, y) => x - y){
        // x-y > 0 大根堆
        // x-y < 0 小根堆
        this.compare = (x, y) => {
            return compare(x, y) >= 0;
        };
        this.queue = []
        if (arr.length){
            this.build_queue(arr);
        }
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    // 入队
    enqueue(val){
        this.queue.push(val);
        // 上浮
        this._up(this.queue.length - 1);
    }

    // 出队
    dequeue(){
        // 取树根元素
        // 最后一个元素放树根，进行下沉
        // log(n)下沉
        let root = this.queue.shift();
        if(!this.isEmpty()){
            let last = this.queue.pop();
            this.queue.unshift(last);
            this._down(0);
        }
        
        return root;
    }

    // 取队首的值
    getFirst(){
        return this.queue[0];
    }

    build_queue(arr){
        let queue = this.queue;
        queue.push(arr[0]);
        for (let i = 1; i < arr.length; i++){
            queue.unshift(arr[i]);
            this._down(0);
        }
    }

    // 对index号元素执行下沉操作
    _down(index){
        let {queue, compare} = this;
        // 有右必有左  且只有非叶子结点参与
        while(index * 2 + 1 < queue.length){
            let l = queue[index * 2 + 1];
            let r = queue[index * 2 + 2] || queue[index * 2 + 1]; // 有可能没有右儿子
            let priority = compare(l , r) ? l : r;
            let priorityIndex = compare(l, r) ? index * 2 + 1: index * 2 + 2;
            if (compare(priority, queue[index])){
                [queue[index], queue[priorityIndex]] = [queue[priorityIndex], queue[index]]
                index = index * 2 + 1
            }else{
                return;
            }
        }
    }

    // 对index号元素执行上浮操作
    _up(index){
        let {queue, compare} = this;
        while(index !== 0){
            let p = index - 1 >> 1
            if (compare(queue[index], queue[p])){
                [queue[index], queue[p]] = [queue[p], queue[index]];
                index = p;
            } else {
                return;
            }
        }
    }
}