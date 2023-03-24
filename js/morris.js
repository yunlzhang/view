function morrisPre(head) {
    if(!head) return;

    let cur = head;
    let mostRight = null;
    while(cur) {
        mostRight = cur.left;
        if(mostRight) {
            while(mostRight.right && mostRight.right !== cuur) {
                mostRight = mostRight.right;
            }
            if(!mostRight.right) {
                mostRight.right = cur;
                console.log(cur.value);
                cur = cur.left;
                continue;
            }else{
                mostRight.right = null;
            }
        }else {
            console.log(cur.value);
        }
        cur = cur.right; 
    }
}


function morrisIn(head){
    if(!head) return;
    let cur = head;
    let mostRight = null;
    while(cur) {
        mostRight = cur.left;
        if(mostRight){
            while(mostRight.right && mostRight.right !== cur) {
                mostRight = mostRight.right;
            }
            if(!mostRight.right){
                mostRight.right = cur;
                cur = cur.left;
                continue;
            }else {
                mostRight.right = null;
            }
        }
        console.log(cur.value);
        cur = cur.left;
    }
}

function morrisPos(head) {
    if(!head) return;
    let cur = head;
    let mostRight = null;
    while(cur) {
        mostRight = cur.left;
        if(mostRight) {
            while(mostRight.right && mostRight.right !== cur) {
                mostRight = mostRight.right;
            }
            if(!mostRight.right) {
                mostRight.right = cur;
                cur = cur.left;
                continue;
            }else {
                mostRight.right = null;
                printEdge(cur.left);
            }
            cur = cur.right;
        }
        printEdge(head);
    }
}

function printEdge(node){
    let tail = reverseEdge(node);
    let cur = tail;;
    while(cur) {
        console.log(cur.value);
        cur = cur.right;
    }
    reverseEdge(tail);
}

function reverseEdge(node){
    let pre = null;
    let next = null;
    while(node) {
        next = node.right;
        node.right = pre;
        pre = node;
        node = next;
    }
    return pre;
}