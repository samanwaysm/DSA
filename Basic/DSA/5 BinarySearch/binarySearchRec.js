function recBinarySearch(arr,target){
    return search(arr, target, 0 , arr.length-1)
}
function search(arr,target,leftIndex,rightIndex){
    let middleIndex
    if(leftIndex>rightIndex){
        middleIndex = Math.floor((leftIndex+rightIndex)/2)
        if (target === arr[middleIndex]) {
            return middleIndex
        }
        if(target<arr[middleIndex]){
            return search(arr,target,leftIndex,middleIndex-1)
        }else{
            return search(arr,target,middleIndex+1,rightIndex)
        }
    }
}
console.log(recBinarySearch([-1,3,5,7,9],3));