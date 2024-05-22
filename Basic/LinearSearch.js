function linearSearch(arr, target){
    for(let i =0; i<arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

console.log(linearSearch([3,2,6,8,3],6));
console.log(linearSearch([1,8,7,9,3],5));           