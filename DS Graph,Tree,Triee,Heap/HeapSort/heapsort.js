
// function heapify(arr, n, i) {
//     let largest = i;
//     const left = 2 * i + 1;
//     const right = 2 * i + 2;
//     if (left < n && arr[left] > arr[largest]) {
//         largest = left;
//     }
//     if (right < n && arr[right] > arr[largest]) {
//         largest = right;
//     }
//     if (largest !== i) {
//         [arr[i], arr[largest]] = [arr[largest], arr[i]];
//         heapify(arr, n, largest);
//     }
// }

function heapify(arr,n,i){
    let largest = i
    let left = 2*i+1
    let right = 2*i+2
    if(left<n && arr[left]>arr[largest]){
        largest = left
    }
    if(right<n && arr[right]>arr[largest]){
        largest = right
    }
    if(largest !== i){
        [arr[i],arr[largest]] = [arr[largest],arr[i]]
        heapify(arr, n, largest)
    }
}


function heapSort(arr){
    let n = arr.length-1
    for(let i = Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
    for(let i = n; i>0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr
}

// function heapSort(arr) {
//     const n = arr.length;
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }
//     for (let i = n - 1; i > 0; i--) {
//         [arr[0], arr[i]] = [arr[i], arr[0]];
//         heapify(arr, i, 0);
//     }
//     return arr;
// }


const array = [22, 14, 20, 3, 7, 4];
console.log(array);
console.log("Sorted Array: ", heapSort(array));