Function.prototype.bind2 = function(context){
    if(typeof this !== 'function'){
        throw Error('Function.prototype.bind - what is trying to be bound is not callable')
    }
    var self = this;
    var args = [].slice.call(arguments,1);
    var fNOP = function(){};
    var fBound = function(){
        var bindArgs = [].slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}