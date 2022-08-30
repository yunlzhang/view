/**
 * avl树  任意节点的左右子树的高度差都不大于1，保证时间复杂度是严格的O(logN)  
 * 增加或删除节点都需要旋转树来达到高度平衡
 */

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.heigth = 1;
    }
}

class AVL{
    constructor(){
        this.root = null;
    }
    addNode(v){
        this.root = this._addChild(this.root,v);
    }
    _addChild(node, v){
        if(!node){
            return new Node(v);
        }

        if(node.value > v){
            node.left = _addChild(node.left, v);
        }else {
            node.right = this._addChild(node.right, v)
        }
        // if(node.value < v)·
        // else{
        //     node.value = v;
        // }

        node.height = 1 + Math.max(this._getHeight(node.left), this.getHeight(node.right));

        let factor = this._getBalanceFactor(node);

        //需要右旋 根节点的左树一定比右树高度高
        if(factor > 1 && this._getBalanceFactor(noe.left) >= 0){
            return this._rightRotate(node);
        }

        //需要左旋，根节点的右树一定比左树高度高
        if(factor < -1 && this._getBalanceFactor(node.right) <= 0){
            return this._leftRotate(node);
        }

        //左右情况
        //节点的左树比右树高，且节点的左树的右树比节点的左树的左树高
        if(factor > 1 && this._getBalanceFactor(node.left) < 0){
            node.left = this._leftRotate(node.left);
            return this._rightRotate(node);
        }

        //右左情况
        // 节点的左树比右树矮，且节点的右树的右树比节点的右树的左树矮
        if(factor < -1 && this._getBalanceFactor(node.right) > 0){
            node.right = this._rightRotate(node.right);
            return this._leftRotate(node);
        }

        return node;
    }

    _getHeight(node){
        if(!node) return 0;
        return node.height;
    }

    _getBalanceFactor(node){
        return this._getHeight(node.left) - this._getHeight(node.right);
    }

    _rightRotate(node){
        let newRoot = node.left;
        let moveNode = newRoot.right;
        newRoot.right = node;
        node.left = moveNode;

        node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
        newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right));
        return newRoot;
    }

    _leftRotate(node){
        let newRoot = node.right;
        let moveNode = newRoot.left;
        newRoot.left = node;
        node.right = moveNode;
        
        node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
        newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right));
        return newRoot;
    }
}