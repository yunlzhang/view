class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.size = 1;
    }
}

class BST {
    constructor(){
        this.root = null;
        this.size = 0;
    }

    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size === 0;
    }

    addNode(v){
        this.root = this._addChild(this.root,v);
    }

    _addChild(node, v){
        if(!node){
            this.size++;
            return new Node(v);
        }
        if(node.value > v){
            node.size++;
            node.left = this._addChild(node.left,v);
        }else if(node.value < v){
            node.size++;
            node.right = this._addChild(node.right,v);
        }

        return node;
    }

    // 先序遍历
    preTraversal(){
        this._pre(this.root);
    }

    _pre(node){
        if(node){
            console.log(node.value);
            this._pre(node.left);
            this._pre(node.right);
        }
    }

    // 中序遍历
    midTraversal(){
        this._mid(this.root);
    }

    _mid(node){
        if(node){
            this._mid(node.left);
            console.log(node.value);
            this._mid(node.right);
        }
    }

    //后序遍历
    backTraversal(){
        this._back(this.root);
    }

    _back(node){
        if(node){
            this._back(node.left);
            this._back(node.right);
            console.log(node.value);
        }
    }

    // 广度遍历
    breadTraversal(){
        if(!this.root) return null;
        let q = [];
        q.push(this.root);
        while(q.length){
            let n = q.pop();
            console.log(n.value);
            if(n.left) q.push(n.left);
            if(n.right) q.push(n.right);
        }
    }

    // 非递归先序遍历
    _notRecursionPreTraversal(root){
        let arr = [], res = [];
        if(root !== null){
            arr.push(root);
        }
        while(arr.length !== 0){
            var temp = arr.pop();
            res.push(temp.val);
            if(temp.right !== null){
                arr.push(temp.right);
            }
            if(temp.left !== null){
                arr.push(temp.left);
            }
        }
        return res;
    }

    // 非递归中序遍历
    _notRecursionMidTraversal(root){
        var arr = [], res = [];
        while(true){
            while(root !== null){
                arr.push(root);
                root = root.left;
            }

            if(arr.length === 0){
                break;
            }

            var temp = arr.pop();
            res.push(temp.val);
            root = temp.right;
        }
        return res;
    }

    // 非递归后序遍历
    _notRecursionBackTraversal(root){
        var arr = [], res = [];
        arr.push(root);
        while(arr.length !== 0){
            var p = arr.pop();
            res.push(p.val);
            if(p.left !== null){
                arr.push(p.left);
            }
            if(p.right !== null){
                arr.push(p.right);
            }
        }

        return res.reverse();
    }

    getMin(){
        return this._getMin(this.root).value;
    }
    _getMin(node){
        if(!node.left) return node;
        return this._getMin(node.left);
    }

    getMax(){
        return this._getMax(this.root).value;
    }

    _getMax(node){
        if(!node.right) return node;
        return this._getMax(node.right);
    }

    // 向下取整是指小于等于v的最大整数
    floor(v){
        let node = this._floor(this.root, v);
        return node ? node.value : null;
    }

    _floor(node, v){
        if(!node) return null;
        if(node.value === v) return v;
        if(node.value > v){
            return this._floor(node.left, v);
        }
        
        let right = this._floor(node.right, v);
        if(right) return right;

        return node;
    }

    //向上取整 就是指大于等于v的最小整数
    ceil(v){
        let node = this._ceil(this.root,v);
        return node ? node.value : null
    }

    _ceil(node, v){
        if(!node) return null;
        if(node.value === v) return node;
        if(node.value < v){
            return this._ceil(node.right,v);
        }

        let left = this._ceil(node.left, v);
        if(left) return left;

    }

    // 获取排名相关
    _getSize(node){
        return node ? node.size : 0;
    }

    select(k){
        let node = this._select(this.root, k);
        return node ? node.value : null
    }

    _select(node, k){
        if(!node) return null;
        
        let size = node.left ? node.left.size : 0;

        if(size > k) return this._select(node.left, k);
        if(size < k) return this._select(node.right, k - size - 1);
        return node;
    }

    //删除最小节点
    deleteMin(){
        this.root = this._deleteMin(this.root);
    }

    _deleteMin(node){
        // 一直递归左子树，如果左子树为空，就判断节点是否拥有右子树，有右子树则把要删除的节点换为右子树
        if(node !== null && !node.left) return node.right;
        node.left = this._deleteMin(node.left);
        node.size = this._getSize(node.left) + this._getSize(node.right) + 1;
        return node;
    }

    //删除节点
    /**
     * 
     * 思路：1、左右子树都不存在，叶节点 直接删除
     * 2、右子树为空，用左子树替代
     * 3、左子树为空，用右子树替代
     * 4、左右子树都不为空(两种方案)
     *   . 找到左子树最大节点，用最大节点替换当前节点，然后递归删除最大节点
     *   . 找到右子树最小节点，用最小节点替换当前节点，然后递归删除最小节点
     */
    delete(v){
        this.root = this._deleteMin(this.root, v);
    }

    _delete(node,v){
        if(!node) return null;
        if(node.value < v){
            node.right = this._delete(node.right, v);
        }else if(node.value > v){
            node.left = this._delete(node.left, v);
        }else{
            if(!node.left) return node.right;
            if(!node.right) return node.left;
            let min = this._getMin(node.right);
            min.right = this._deleteMin(node.right);
            min.left = node.left;
            node = min;
        }
        node.size = this._getSize(node.left) + this._getSize(node.right) + 1;
        return node;
    }
}