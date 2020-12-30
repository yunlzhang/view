Function.prototype.call2 = function(context){
    const args = Array.prototype.slice.call(arguments,1);
    context = context || window;
    context.fn = this;
    let res = eval('context.fn('+ args +')');
    delete context.fn;
    return res;
}