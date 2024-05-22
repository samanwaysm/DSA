// Bubble sort

// function bubbleSort(arr){

//     // using for loop

//     // for(i=0;i<arr.length-1;i++){
//     //     for(j=i+1;j<arr.length;j++){
//     //         if(arr[i]>arr[j]){
//     //             [arr[i],arr[j]] = [arr[j],arr[i]]
//     //         }
//     //     }
//     // }
//     // return arr

//     // using while

//     // let i=0;j=0;
//     // while(i<arr.length-1){
//     //     j=i+1
//     //     while(j<arr.length){
//     //         if(arr[i]>arr[j]){
//     //             [arr[i],arr[j]] = [arr[j],arr[i]]
//     //         }
//     //         j++
//     //     }
//     //     i++
//     // }
//     // return arr

// }
// arr = [5,2,6,9,4,1,3]
// console.log(bubbleSort(arr));

//---------------------------------------------------

// Selection Sort

// function selectionSort(arr){
//     let small
//     for(let i =0;i<arr.length;i++){
//         small = i
//         for(j=i+1;j<arr.length;j++){
//             if(arr[small]>arr[j]){
//                 small = j
//             }
//         }
//         [arr[i],arr[small]] = [arr[small],arr[i]]
//     }
//     return arr
// }

// let arr = [3,2,6,9,4,1,5]
// console.log(selectionSort(arr));
//---------------------------------------------------

// Insersion Sort

// function InsertionSort(arr){
//     let temp 
//     for(let i=1;i<arr.length;i++){
//         curr = arr[i]
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


// let arr = [3,2,6,9,4,1,5]
// console.log(InsertionSort(arr));
//---------------------------------------------------

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
//     let i=0;j=0;k=0;
//     let result =[]
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

// let arr = [3,2,6,9,4,1,5]
// console.log(mergeSort(arr));
//---------------------------------------------------

// Quick Sort

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// let arr = [3,2,6,9,4,1,5]
// console.log(quickSort(arr));

//---------------------------------------------------

// stack --Array

// class Stack{
//     constructor(){
//         this.arr =[]
//     }

//     set(value){
//         return this.arr.unshift(value)
//     }
//     get(){
//         return this.arr.shift()
//     }

//     display(){
//         // let value =''
//         // for(let i=0;i<this.arr.length;i++){
//         //     value += `${this.arr[i]} `
//         // }
//         console.log(this.arr);
//     }
    
// }

// const stack = new Stack()
// stack.set(10)
// stack.set(20)
// // stack.get()
// console.log(stack.get());
// stack.display()

//---------------------------------------------------
// stack --Array
// class Queue{
//     constructor(){
//         this.arr =[]
//     }
//     set(value){
//         this.arr.unshift(value)
//     }
//     get(){
//         return this.arr.pop()
//     }
//     display(){
//         console.log(this.arr);
//     }
// }

// const queue = new Queue()

// queue.set(10)
// queue.set(20)
// console.log(queue.get());
// queue.display()
//---------------------------------------------------
// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class Stack{
//     constructor(){
//         this.first = null
//         this.last = null
//         this.size = 0
//     } 
//     push(value){
//         const node = new Node(value)
//         if(!this.first){
//             this.first= node
//             this.last =node
//         }else{
//             let temp = this.first
//             this.first = node
//             this.first.next = temp
//         }
//         this.size++
//     }
//     pop(){
//         if(!this.first)return null
//         this.first = this.first.next
//         this.size--
//     }
//     display(){
//         let temp = this.first
//         let listValues =''
//         while(temp !== null){
//             listValues += `${temp.value} `
//             temp = temp.next
//         }
//         return listValues
//     }
// }

// const stack = new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// console.log(stack.display());
// stack.pop()
// console.log(stack.display());
// console.log(stack);

//---------------------------------------------------

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null 
//     }
// }
// class Queue{
//     constructor(){
//         this.first = null
//         this.last = null
//         this.size = 0
//     }
//     enqueue(value){
//         const node = new Node(value)
//         if(!this.first){
//             this.first = node
//             this.last = node
//         }else{
//             this.last.next = node
//             this.last = node
//         }
//         this.size++
//     }
//     dequeue(){
//         if(!this.first)return null
//         this.first = this.first.next
//         this.size--
//     }
//     display(){
//         let temp = this.first
//         let listValues = ''
//         while(temp !== null){
//             listValues += `${temp.value} `
//             temp = temp.next
//         }
//         console.log(listValues); 
//     }
// }

// const queue = new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.display()
// queue.dequeue()
// queue.display()

//---------------------------------------------------

// hash table

// class hashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total =0;
//         for(let i =0; i<key.length; i++){
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
//     remove(key){
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }

// const table = new hashTable(50)

// table.set('Name','Sam')
// table.set('Age','21')
// table.display()
// table.remove('Age')
// table.display()
//---------------------------------------------------

// changing

// class hashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0;
//         for(let i=0; i< key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key, value){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             let sameKeyItem = bucket.find(item => item[0] === key)
//             if(sameKeyItem){
//                 sameKeyItem[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
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
// console.log(table);

//---------------------------------------------------

// leaner probbing

// class hashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0;
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         let index = this.hash(key)
//         while(this.table[index] !== undefined){
//             index = index+1
//         }
//         if(this.table[index] === undefined){
//             this.table[index] = [[key,value]]
//         }else{
//             let existingKeyIndex  = this.table[index].find(item => item[0] === key)
//             if(existingKeyIndex){
//                 this.table[index] = value
//             }else{
//                 this.table[index].push([key,value])
//             }
//         }
//     }
//     display(){
//         for(let i=0;i<this.size;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }

// const table = new hashTable(50)

// table.set('Name','Sam')
// table.set('Mane','Abhi')
// table.display()

//---------------------------------------------------

// selection sort

// function insertionSort(arr){
//     let temp
//     for(let i=1;i<arr.length;i++){
//         curr = arr[i]
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

// // let arr = [6,2,8,3,9,4]
// let str = 'samanway'
// let arr = str.split('')
// console.log(insertionSort(str));

// //------------------------------------------------

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
}
function merge(arr1, arr2){
    let i=0;j=0;k=0;
    let result = []
    let size = arr1.length+arr2.length
    while(k<size){
        k++
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

arr = [8,5,3,6,9,2]
// console.log(mergeSort(arr));
let arr1 = [10,20,30]
let arr2 = [35,25,15]

let arr3 = mergeSort(arr2)
console.log(merge(arr1,arr3));

//---------------------------------------------------

// class hashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0;
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key,value){
//         let index = this.hash(key)
//         while(this.table[index] !== undefined){
//             index = index+1
//         }
//         if(this.table[index] === undefined){
//             this.table[index] = [[key,value]]
//         }else{
//             let Ex = this.table[index].find(item => item[0] === key)
//             if(Ex){
//                 this.table[index][1] = value
//             } else{
//                 this.table[index].push([key,value])
//             }
//         }
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
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

// -------------------------------------------

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class Stack{
//     constructor(){
//         this.first = null
//         this.last = null
//         this.size = 0
//     }
//     push(value){
//         const node = new Node(value)
//         if(!this.first){
//             this.first = node
//             this.last = node
//         }else{
//             let temp = this.first
//             this.first = node
//             this.first.next = temp
//         }
//     }
//     pop(){
//         if(!this.first) return null
//         this.first= this.first.next
//     }

//     display(){
//         let temp = this.first
//         let val =''
//         while(temp){
//             val += `${temp.value} `
//             temp = temp.next
//         }
//         return val
//     }
// }

// const stack = new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)

// console.log(stack.display());

// stack.pop()

// console.log(stack.display());

//----------------------------------------

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class Queue{
//     constructor(){
//         this.first = null
//         this.last = null
//         this.size =0
//     }
//     enqueue(value){
//         const node = new Node(value)
//         if(!this.first){
//             this.first = node
//             this.last = node
//         }else{
//             this.last.next = node
//             this.last = node
//             this.last.next = this.first
//         }
//         this.size++
//     }

//     dequeue(){
//         if(!this.first)return null
//         this.first = this.first.next
//         this.size--
//     }

//     display(){
//         let temp = this.first
//         let val = ''
//         while(temp){
//             val += `${temp.value} `
//             temp = temp.next
//         }
//         return val
//     }
// }

// const queue = new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)

// console.log(queue.display())

// queue.dequeue()

// console.log(queue.display())

// console.log(queue);

//-----------------------------

// function bubbleSort(arr){
//     let i=0;j=0;
//     while(i<arr.length){
//         j=0
//         let small = i
//         while(j<arr.length){
//             if(arr[small]<arr[j]){
//                 small = j
//             }
//             [arr[i],arr[small]] = [arr[small],arr[i]]
//             j++
//         }
//         i++
//     }
//     return arr
// }

// let arr = [5,2,8,3,9,4]
// console.log(bubbleSort(arr));