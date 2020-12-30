function throttle(func, wait, options){
    var timeout, context, args;
    var previous = 0;
    if(!options) options = {};
    var later = function(){
        previous = options.leading ? 0 : +new Date();
        timeout = null;
        func.apply(context,args);
        context = args = null;
        console.log('最后执行')
    }

    var throttled = function(){
        var now = +new Date();
        if(!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if(remaining <= 0){
            if(timeout){
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context,args);
            context = args = null;
        }else if(!timeout && options.trailing !== false){
            timeout = setTimeout(later,remaining);
        }
    }
    throttle.cancel = function(){
        clearTimeout(timeout);
        previous = 0;
        timeout = null;
    }

    return throttled;
}