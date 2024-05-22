function findOddNum(arr){
    let arr1= []
    for(i=0;i<=arr.length-1;i++){
        if(arr[i]%2!==0){
            arr1.push(arr[i])
        }
    }
    return arr1
}

let arr = [1,2,3,4,5]
console.log(findOddNum(arr));