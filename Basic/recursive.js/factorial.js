
function fact(n){
    if(n === 0){
        return n
    }
    console.log(n);
    return n*fact(n-1)
}

console.log(fact(4));