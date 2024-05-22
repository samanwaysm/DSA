// Bubble sort

// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }

// let arr = [4,2,7,5,9,1]
// console.log(bubbleSort(arr));

//------------------------------------------------------------

// Selection Sort

// function selectionSort(arr){
//     let small 
//     for(let i = 0 ; i < arr.length ; i++){
//         small = i 
//         for(let j = i+1 ; j < arr.length ; j++){
//             if(arr[small]>arr[j]){
//                 small = j
//             }
//         }
//         [arr[small],arr[i]] = [arr[i],arr[small]]
//     }
//     return arr
// }

// let arr = [4,2,7,5,9,1]
// console.log(selectionSort(arr));

//------------------------------------------------------

// Insertion Sort

// function insertionSort(arr){
//     let temp 
//     for(let i =1; i<arr.length ; i++){
//         let curr = arr[i]
//         for(let j = i-1;j>=0;j--){
//             if(curr < arr[j]){
//                 temp = arr[j]
//                 arr[j] = curr
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

// let arr = [4,2,7,5,9,1]
// console.log(insertionSort(arr));

//-------------------------------------------

// Merge Sort

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = mergeSort(arr.slice(0,mid))
//     let right = mergeSort(arr.slice(mid))
//     return merge(left,right)
// }

// function merge(arr1,arr2){
//     let result = []
//     let i = 0; j = 0; k = 0;
//     let size = arr1.length+arr2.length
//     while(k<size){
//         k++
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

// let arr = [4,2,7,5,9,1]
// console.log(mergeSort(arr));


//---------------------------------------------------

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// let arr = [4,2,7,5,9,1]
// console.log(quickSort(arr));

//-----------------------------------------------------------

// class hashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0
//         for(let i = 0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         const index = this.hash(key)
//         this.table[index] = value
//     }

//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }


// }

// const table = new hashTable(50)

// table.set('Name','Sam')
// table.set('Age',22)

// console.log(table.get('Name'));

//-----------------------------------------------------------

// Merge Sort --> name

// function mergeSort(s){
//     // let arr = [...s]
//     if(s.length<2){
//         return s
//     }
//     let mid = Math.floor(s.length/2)
//     let left = mergeSort(s.slice(0,mid))
//     let right = mergeSort(s.slice(mid))
//     return merge(left,right)
// }

// function merge(arr1,arr2){
//     let result = []
//     let i = 0; j = 0; k=0;
//     let size = arr1.length+arr2.length
//     while(k<size){
//         k++
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

// // let arr = [4,2,5,3]
// // console.log(mergeSort(arr));
// // arr = [...s]
// console.log(mergeSort('samanway'));

//-----------------------------------------

// Hash table without collision

// class hashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0
//         for(let i =0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         } 
//         return total % this.size
//     }
//     set(key,value){
//         const index = this.hash(key);
//         const bucket = this.table[index];
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             let sameKeyItem = bucket.find(item=>item[0] === key)
//             if(sameKeyItem){
//                 sameKeyItem[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKeyItem = bucket.find(item=>item[0] === key)
//             if (sameKeyItem){
//                 return sameKeyItem[1]
//             }
//         }
//         return undefined
//     }

//     remove(key){
//         let index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKeyItem = bucket.find(item=>item[0] === key)
//             if(sameKeyItem){
//                 bucket.splice(bucket.indexOf(sameKeyItem), 1)
//             }
//         }
//     }

//     display(){
//         for(let i =0 ; i<this.table.length ; i++){
//             if(this.table[i]){
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }


// const table = new hashTable(50)


// table.set('Name','Sam')
// table.set('Mane','Abhi')

// table.display()

// console.log(table.get('Name'));

// table.remove('Name')

// table.display()


//-----------------------------------------------

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = mergeSort(arr.slice(0,mid))
//     let right = mergeSort(arr.slice(mid))
//     return merge(left,right)
// }
// function merge(arr1,arr2){
//     let result = []
//     let i=0;j=0;k=0
//     let size = arr1.length+arr2.length
//     while(k<size){
//         k++
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

// let arr = [5,7,2,4,8,3]
// console.log(mergeSort(arr));


//--------------------------------------------------

// function quickSort(arr){
//     if(arr.length<=1)return arr
//     let pivot = arr[arr.length-1]
//     let left =[]
//     let right = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// let arr = [5,7,2,4,8,3]
// console.log(quickSort(arr));

//----------------------------------------------

// function insertionSort(arr){
//     let temp
//     for(let i=1;i<arr.length;i++){
//         let curr = arr[i]
//         for(let j = i-1;j>=0;j--){
//             if(curr<arr[j]){
//                 temp = arr[j]
//                 arr[j] = curr
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }


// let arr = [5,7,2,4,8,3]
// console.log(insertionSort(arr));


//-----------------------------------------------

// function insertionSort(arr){
//     let small 
//     for(let i=0;i<arr.length;i++){
//         small = i
//         for(let j=0;j<arr.length;j++){
//             if(arr[small]<arr[j]){
//                 small = j
//             }
//             [arr[small],arr[i]] = [arr[i],arr[small]]
//         }
//     }
//     return arr
// }


// let arr = [5,7,2,4,8,3]
// console.log(insertionSort(arr));

// ----------------------------------------------- 

// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j = 0;j<arr.length;j++){
//             if(arr[i]<arr[j]){
//                 [arr[i],arr[j]] = [arr[j],arr[i]]
//             }
//         }
//     }
//     return arr
// }

// arr = [4,2,7,9,4,3]
// console.log(bubbleSort(arr));

//----------------------------------

// string reverse using stack

// function stack(str) {
//     const stk = []
//     let a=''
//     for (let i = 0; i < str.length; i++){
//         stk.push(str[i])
//     }
//     while(stk.length>0)
//         a+=stk.pop()
//     return a
// }

// console.log(stack('richin'));


// let str = 'samanway'
// function reverse(str){
//     let string = str.split('')
//     let stack = []
//     let value =''
//     for(i=0;i<string.length;i++){
//         stack.push(string[i])
//     }
//     console.log(stack);
//     while(stack.length){
//         value += stack.pop()
//     }
//     console.log(value);
// }

// reverse(str)

// let string = 'samanway'
// function reverse(string){
// let str = string.split('')
// let stack = []
// let value = ''
// for(let i =0;i<str.length;i++){
//     stack.push(str[i])
// }
// // console.log(stack);
// while (stack.length) {
//     value += stack.pop()
// }
// console.log(value);
// }

// reverse(string)

//----------------------------------------------

// function mergeSort(str){
//     if (str.length<2) {
//         return str
//     }
//     let mid = Math.floor(str.length/2)
//     let left = mergeSort(str.slice(0,mid))
//     let right = mergeSort(str.slice(mid))
//     return merge(left,right)
// }

// function merge(arr1,arr2){
//     let result =[]
//     let i=0;j=0;k=0;
//     let size = arr1.length+arr2.length
//     while(k<size){
//         k++
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
//     return result.join('')
// }

// let string = 'samanway'
// let str = string.split('')

// console.log(mergeSort(str));



// function quickSort(str){
//     let pivot = str[str.length-1]
//     let left =[]
//     let right = []
//     if(str.length<=1){
//         return str
//     }
//     for(let i=0;i<str.length-1;i++){
//         if(str[i]<pivot){
//             left.push(str[i])
//         }else{
//             right.push(str[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// let string = 'samanway'
// let str = string.split('')
// console.log(quickSort(str).join(''));



// function insertionSort(arr){
//     let temp
//     for(let i=1; i<arr.length;i++){
//         let curr = arr[i]
//         for(let j=i-1;j>=0;j--){
//             if(curr<arr[j]){
//                 temp = arr[j]
//                 arr[j] = curr
//                 arr[j+1] = temp
//             }
//         } 
//     }
//     return arr
// }

// str = 'samanway'
// arr = str.split('')

// console.log(insertionSort(arr).join(''));


// function selectionSort(arr){
//     let small 
//     for(let i=0;i<arr.length;i++){
//         small = i
//         for(let j=0;j<arr.length;j++){
//             if(arr[small]<arr[j]){
//                 small = j
//             }
//             [arr[i],arr[small]] = [arr[small],arr[i]] 
//         }
//     }
//     return arr
// }

// let arr = [5,9,5,7,3,1,2]
// console.log(selectionSort(arr));


// function bubbleSort(arr){
//     for(let i =0 ;i<arr.length;i++){
//         for( let j =0;j<arr.length;j++){
//             if(arr[i]<arr[j]){
//                 [arr[i],arr[j]] = [arr[j],arr[i]]
//             }
//         }
//     }
//     return arr
// }

// let arr =[6,3,7,1,2,8]

// console.log(bubbleSort(arr));

class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total%this.size
    }

    // set(key,value){
    //     const index = this.hash(key);
    //     this.table[index] = value;
    // }
    set(key,value){
        let index = this.hash(key)
        console.log(index);
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{

        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }

}

            // let sameKeyItem = bucket.find(item=>item[0] === key)
            // if(sameKeyItem){
            //     sameKeyItem[i] = value
            // }else{
            //     bucket.push([key,value])
            // }


const table = new hashTable(50)

table.set('Name','Sam')
table.set('Mane','Abhi')

table.display()