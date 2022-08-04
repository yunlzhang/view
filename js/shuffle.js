function shuffle(arr){
    for(let i = arr.length - 1; i >= 0; i--){
        let randomIndex = Math.floor(Math.random()  * (i + 1))
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];;

    } 
    return arr;
}