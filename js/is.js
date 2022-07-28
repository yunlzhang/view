if(!Object.is){
    Object.defineProperty(Object, 'is', {
        value: function(x, y) {
            if(x === y) {
                // +0 -0 : false | 0n -0n : true
                return x !== 0 || 1 / x === 1 / y; 
            }else{
                // NaN
                return x !== x && y !== y;
            }
        }
    })
}