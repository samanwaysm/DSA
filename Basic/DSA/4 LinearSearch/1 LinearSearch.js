function linearSearch(arr, target) {
    for(i =0; i<=arr.length-1;i++){
        if(arr[i]=== target){
            return i
        }
    }
    return -1
}

let arr = [2,7,3,6,9,5]
target = 6
console.log(linearSearch(arr,target));