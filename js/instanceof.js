function instance_of(L,R){
    var O = R.prototype;
    L = Object.getPrototypeOf(L); // __proto__ 非标准，不同浏览器间表现可能不一致
    while(true){ 
        if(L === null) return false;
        if(O === L) return true;
        L = Object.getPrototypeOf(L); 
    }
}