
function insertionSort(arr){
    let temp
    for(let i =1;i<arr.length;i++){
        let curr = arr[i]
        for(let j = i-1;j>=0;j--){
            if(curr<arr[j]){
                temp = arr[j]
                arr[j] = curr
                arr[j+1] = temp
            }else{
                break;
            }
        }
    }
    return arr
}

let arr = [3,8,5,9,1]
console.log(insertionSort(arr));