Function.prototype.call2 = function(){
    var context = [].shift.call(arguments) || window;
    context.fn = this;
    var args = [];
    for(var i = 0; i < arguments.length; i++){
        args.push('arguments[' + i + ']');
    }
    var result = eval('context.fn(' + args + ')');
    delete context.fn;
    return result;
}

Function.prototype.apply = function(context,arr){
    context = context || window;
    context.fn = this;
    var result;
    if(!arr || !arr.length){
        result = context.fn();
    }else{
        var args = [];
        for(var i = 0; i < arr.length; i++){
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')');
    }

    delete context.fn;
    return result;
}