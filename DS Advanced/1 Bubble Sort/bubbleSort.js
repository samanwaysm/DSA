
function bubbleSort(arr){
    for(let i = 0;i<=arr.length-1;i++){
        for(let j=0;j<=arr.length;j++){
            if(arr[j]<arr[j+1]){
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
            }
        }
    }
    return arr
}

let arr = [3,2,5,8,4,1]
console.log(bubbleSort(arr));

