function collectOdd(arr,i){
    let result = [];

    if(arr.length=== i){
        return result
    }
    if(arr[i]%2!==0){
        result.push(arr[i])
    }
    return result.concat(collectOdd(arr,i+1))
}

let arr = [1,2,3,4,5]

console.log(collectOdd(arr,0));
