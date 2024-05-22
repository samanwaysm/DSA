function selectionSort(arr){
let small
for(let i = 0;i<arr.length;i++){
    small = i
    for(let j = i+1; j<arr.length;j++){
        if(arr[small]>arr[j]){
            small = j
        }
    }
    [arr[i],arr[small]] = [arr[small],arr[i]]
}
return arr
}

let arr = [5,8,4,2,9]
console.log(selectionSort(arr));