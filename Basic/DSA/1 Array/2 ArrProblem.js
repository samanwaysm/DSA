let arr = [2,4,5,6,9];
let target  = 6;


function findtagetSum(arr,target){
    const newSet = new Set();
    for(let index = 0; index<arr.length; index++){
        if(newSet.has(target-arr[index])){
            console.log(arr[index],target-arr[index]);
        }else{
            newSet.add(arr[index])
        }
    }
}

findtagetSum(arr, target)