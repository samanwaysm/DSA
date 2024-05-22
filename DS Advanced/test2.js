function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    
    // Add remaining elements from arr1
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    
    // Add remaining elements from arr2
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    
    return mergedArray;
}

// Example usage:
let arr1 = [10,20,30];
let arr2 = [35,25,15];
console.log(mergeSortedArrays(arr1, arr2));


// function bubbleSort(arr){
//     let i=0;j=0;
//     while(i<arr.length){
//         j=0;
//         while(j<arr.length){
//             if(arr[i]<arr[j]){
//                 [arr[i],arr[j]] = [arr[j],arr[i]]
//             }
//             j++
//         }
//         i++
//     }
//     return arr
// }

// let arr = [4,7,5,9,2,3]


// function mergeSort(arr){
//     if(arr.length<=1)return arr
//     const mid = Math.floor(arr.length/2)
//     const left = mergeSort(arr.slice(0,mid))
//     const right = mergeSort(arr.slice(mid))
//     return merge(left,right)
// }

// function merge(arr1,arr2){
//     let result = []
//     let i=0;j=0;k=0;
//     let size = arr1.length+arr2.length
//     while(k<size){
//         k++;
//         if(arr1[i]<arr2[j]){
//             result.push(arr1[i])
//             i++
//         }else if(arr1[i]>arr2[j]){
//             result.push(arr2[j])
//             j++
//         }else{
//             if(i<arr1.length){
//                 result.push(arr1[i])
//                 i++
//             }else{
//                 result.push(arr2[j])
//                 j++
//             }
//         }
//     }
//     return result
// }

// let arr1 = [10,20,30]
// let arr2 = [35,25,15]

// console.log(mergeSort([...arr1,...arr2]));

// console.log(merge(arr1,arr2));