function checkDivisible(arr,value){
    let arr1=[];
    for(i=0;i<=arr.length-1;i++){
        if(arr[i]%value ==0){
            arr1.push(arr[i])
        }
    }
    return arr1
}

let arr = [3,4,5,6,7,8]
let value = 2

console.log(checkDivisible(arr,value));
console.log(checkDivisible(arr,3));