function isArrayLike(o) {
    if (o && // o is not null, undefined, etc
        // o is an object
        typeof o === "object" &&
        // o.length is a finite number
        isFinite(o.length) &&
        // o.length is non-negative
        o.length >= 0 &&
        // o.length is an integer
        o.length === Math.floor(o.length) &&
        // o.length < 2^32
        o.length < 4294967296) //数组的上限值
      	return true;
    else 
      	return false;
}