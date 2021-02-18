# 碎片化知识记录

# encodeURI 和 encodeURIComponent的区别

> encodeURI方法不会对下列字符编码 ASCII字母 数字 ~!@#$&*()=:/,;?+'
> encodeURIComponent方法不会对下列字符编码 ASCII字母 数字 ~!*()'
> encodeURIComponent比encodeURI编码的范围更大
> 编码整个URI，用encodeURI；编码URI中参数的时候用encodeURIComponent