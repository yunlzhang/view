# 碎片化知识记录

### encodeURI 和 encodeURIComponent的区别

> encodeURI方法不会对下列字符编码 ASCII字母 数字 ~!@#$&*()=:/,;?+'
> encodeURIComponent方法不会对下列字符编码 ASCII字母 数字 ~!*()'
> encodeURIComponent比encodeURI编码的范围更大
> 编码整个URI，用encodeURI；编码URI中参数的时候用encodeURIComponent

### dns相关

> dns缓存：浏览器缓存、系统缓存、路由器缓存、IPS服务器缓存、跟域名服务器缓存、顶级域名服务器缓存、主域名服务器缓存

### https过程

> * 客户端请求服务器获取证书公钥
> * 客户端(SSL/TLS)解析证书（无效会弹出警告）
> * 生成随机值
> * 用公钥加密随机值生成密钥
> * 客户端将秘钥发送给服务器
> * 服务端用私钥解密秘钥得到随机值
> * 将信息和随机值混合在一起进行对称加密
> * 将加密的内容发送给客户端
> * 客户端用秘钥解密信息