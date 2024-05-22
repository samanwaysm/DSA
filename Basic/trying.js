// let numbers = [4, 6, 3, 9, 5, 8];

// let temp

// for (let i = 0; i < numbers.length; i++) {
//     for(let j = i+1; j < numbers.length; j++){
//         if(numbers[i]>numbers[j]){
//             temp = numbers[i]
//             numbers[i] = numbers[j]
//             numbers[j] = temp
//         }
//     }
// }

// console.log(numbers[numbers.length-1],numbers[numbers.length-2]);




// function rev(str){
//     let arr = []
//     for(let i = str.length-1; i>=0 ; i--){
//         arr.push(str[i])
//     }
//     let newStr = arr.join(' ')
//     return newStr
// }

// let str = 'hello world'
// let send = str.split(' ')
// console.log(rev(send));


// function recRev(str){
//     console.log(str.length);
//     if(str.length<=1){
//         return str
//     }
//     let lastWord = str[str.length-1]
//     str.pop()
//     return lastWord + " " + recRev(str)
// }

// let str = 'my name is samanway'
// let send = str.split(' ')
// console.log(send);
// console.log(recRev(send));

//linear search

// function lnSrch(arr,value){
//     for(i =0 ;i<= arr.length-1; i++){
//         if(value === arr[i]){
//             return i
//         }
//     }
// }
// arr = [2,3,5,7,9,4,2,6]

// console.log(lnSrch(arr,9));

// Binary search

// function binarySearch(arr,target){
//     let leftIndex = 0
//     let rightIndex = arr.length-1
//     while(leftIndex<=rightIndex){
//         let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//         if(target === arr[middleIndex]){
//             return middleIndex
//         }
//         if(target<arr[middleIndex]){
//             rightIndex = middleIndex-1
//         }else{
//             leftIndex = middleIndex+1
//         }
//     }
//     return -1
// }

// let arr = [2,3,5,6,8,9]

// console.log(binarySearch(arr,6));

// binary rec

// function recBinarySearch(arr, target){
//     return Search(arr, target, 0, arr.length-1)
// }
// function Search(arr, target , leftIndex , rightIndex){
//     console.log(rightIndex,leftIndex);
//     if(leftIndex>rightIndex){
//         return -1
//     }
//     let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//     if(target === arr[middleIndex]){
//         return middleIndex
//     }
//     if(target<arr[middleIndex]){
//         return Search(arr, target, leftIndex,middleIndex-1)
//     }else{
//         return Search(arr, target, middleIndex+1, rightIndex)
//     }
// }

// let arr = [2,3,5,6,8,9]

// console.log(recBinarySearch(arr,6));

// function isPalindrome(str){
// let newStr = str.toLowerCase()
// if(newStr<=1){
//     return true
// }
// if(newStr[0]!== newStr[newStr.length-1]){
//     return false
// }
// return isPalindrome(newStr.slice(1,-1))
// }

// function isPalindrome(str){
//     let newStr = str.toLowerCase()
//     let arr = []
//     for(i=newStr.length-1;i>=0;i--){
//         arr.push(newStr[i])
//     }
//     console.log(arr.join(''));
//     if(arr.join('')===newStr){
//         return true
//     }else{
//         return false
//     }
    
// }

// let str = 'Malayalam'

// console.log(isPalindrome(str));


// function rev(str){
//     let lastWord = str[str.length-1]
//     if(str.length<=1){
//         return lastWord
//     }
//     str.pop()
//     return lastWord +" "+ rev(str)
// }

function revereseString(str){
    let arr = []
    for(i = str.length-1; i>=0;i--){
        arr.push(str[i])
    }
    return arr.join(' ')
}

let str = 'my name is samanway' 
let send = str.split(' ')
console.log(revereseString(send));