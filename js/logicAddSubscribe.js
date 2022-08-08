function add(x,y){
    var sum = x;
    while(y !== 0){
        sum = x ^ y;
        y = (x & y) << 1;
        x = sum;
    }
    return sum;
}

// ~ 取反运算符  ~b = - (b + 1)
function sub(a,b){
    return add(a, add(~b,1));
}