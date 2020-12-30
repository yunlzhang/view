class TrieNode{
    constructor(){
        this.path = 0; // 代表每个字符经过节点的次数
        this.end = 0;//代表到该节点的字符串有几个
        this.next = new Array(26).fill(null);
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }
    insert(str){
        if(!str) return;
        let node = this.root;
        for(let i = 0; i < str.length; i++){
            let index = str[i].charCodeAt() - 'a'.charCodeAt();
            if(!node.next(index)){
                node.next[index] = new TrieNode();
            }
            node.path += 1;
            node = node.next[index];
        }
        node.end += 1;
    }
    // 搜索字符串出现的次数
    search(str){
        if(!str) return 0;
        let node = this.root;
        for(let i = 0; i< str.length; i++){
            let index = str[i].charCodeAt() - 'a'.charCodeAt();
            if(!node.next[idex]){
                return 0;
            }
            node = node.next[index];
        }
        return node.end;
    }

    //删除字符串
    delete(str){
        if(!this.search(str)) return;
        let node = this.root;
        for(let i = 0; i < str.length; i++){
            let index = str[i].charCodeAt() - 'a'.charCodeAt();
            if(--node.next[index].path === 0){
                node.next[index] = null;
                return;
            }
            node = node.next[index];
        }
        node.end -= 1;
    }
}