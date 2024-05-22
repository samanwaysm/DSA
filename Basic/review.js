let arr= [1, 3, 4, 5, 6, 9, 11, 15, 18, 21, 25] 

let target = 15


console.log(binarySearch(arr,target));

function binarySearch(arr,target){
    return Search(arr,target,0,arr.length-1)
}

function Search(arr,target,leftIndex,rightIndex){
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    if(target === arr[middleIndex]){
        return middleIndex
    }
    if(target<arr[middleIndex]){
        return Search(arr,target,leftIndex,middleIndex-1)
    }else{
        return Search(arr,target,middleIndex+1,leftIndex)
    }

}