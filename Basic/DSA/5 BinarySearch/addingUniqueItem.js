function binarySearch(arr, value){
    let arr1 = []
    let leftIndex = 0;
    let rightIndex = arr.length-1;
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    while(leftIndex<=rightIndex){
        if(value === arr[middleIndex]){
            return false
        }
        if(value<arr[middleIndex]){
            rightIndex = middleIndex-1
        }else{
            leftIndex = middleIndex+1
        }
        middleIndex = Math.floor((leftIndex+rightIndex)/2)
    }
    arr.push(value)
    return arr
}

console.log(binarySearch([1,2,3,4,5,7,8,9],6));