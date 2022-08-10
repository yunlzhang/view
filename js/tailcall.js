// 求阶乘

function factorial(n) {
    if(n === 0) return 1;
    return n * factorial(n - 1);
}


function tailFactorial(n, total = 1) {
    if(n === 1) return total;
    return tailFactorial(n - 1, n * total);
}