const getMostRepeatLetters = (str) => {
    if(!str) return 0;
    let win = [];
    let most = 0;
    for(let char of str){
        if(win[win.length - 1] && win[win.length - 1] !== char){
            win = [];
        }
        win.push(char);
        most = Math.max(most,win.length)
    }
    return most;
}

function is(x,y){
    if(x === y){
        // +0 -0
        return x !== 0 || 1/x === 1/y;
    }else{
        //NaN NaN
        return x !== y && y !== x;
    }
}