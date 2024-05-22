function merge(arr1,arr2){
    let result = []
    let i=0;j=0;k=0
    let size = arr1.length+arr2.length
    while(k<size){
        k++;
        if(arr1[i]<arr2[j]){
            result.push(arr1[i])
            i++
        }else if(arr1[i]>arr2[j]){
            result.push(arr2[j])
            j++
        }else{
            if(i<arr1.length){
                result.push(arr1[i])
                i++
            }else{
                result.push(arr2[j])
                j++
            }
        }
    }
    return result
}
function mergeSort(arr){
    if(arr.length<=1)return arr
    const mid = Math.floor(arr.length/2)
    const left = mergeSort(arr.slice(0,mid))
    const right = mergeSort(arr.slice(mid))
    return merge(left,right)
}
let arr = [5,2,6,8,3,9,1]
// console.log(mergeSort(arr));


let ar1 =[10,20,30]
let ar2 =[35,25,15]

let ar3 = mergeSort(ar2);

console.log(merge(ar1,ar3));

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     const mid = Math.floor(arr.length/2)
//     const left = arr.slice(0,mid)
//     const right = arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(leftArr, rightArr){
//     const sortedArr = []
//     while(leftArr.lenth && rightArr.length){
//         if(leftArr[0] <= rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return[...sortedArr,...leftArr,...rightArr]
// }



// let arr = [5,2,6,8,3,9,1]

// console.log(mergeSort(arr));