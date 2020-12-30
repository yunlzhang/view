Function.prototype.apply2 = function(context,args){
    context = context || window;
    context.fn = this;
    let res;
    if(!args.length){
        res = context.fn();
    }else{
        res = eval('context.fn(' + args + ')');
    }
    delete context.fn;
    return res;
}