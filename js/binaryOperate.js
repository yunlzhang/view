// 二进制运算
// 判断是否是2 ** x

function is2X(n) {
    return n > 0 && (n & (n - 1)) === 0
}