function debounce(func, wait, immediate){
    var timeout, result;
    var debounced = function(){
        var context = this;
        var args = arguments;
        if(timeout) clearTimeout(timeout);
        if(immediate){
            var callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            },wait)
            if(callNow) result = func.apply(context,args);
        }else{
            timeout = setTimeout(function(){
                func.apply(context,args);
            },wait);
        }
    }

    debounced.cancel = function(){
        clearTimeout(timeout);
        timeout = null;
    }
}