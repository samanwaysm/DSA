// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.first = null
//         this.size = 0
//     }

//     push(value){
//         const node = new Node(value)
//         if(!this.first){
//             this.first = node
//         }
//         else{
//             let temp = this.first
//             this.first = node
//             this.first.next = temp
//         }
//         this.size++
//     }

//     pop(){
//         this.first = this.first.next
//         this.size--
//     }

//     display(){
//         let temp = this.first
//         let value = ''
//         while(temp){
//             value += `${temp.value} `
//             temp = temp.next
//             // console.log(temp.value);
//         }
//         return value
//     }
// }

// const stack = new Stack()


// stack.push(10)
// stack.push(20)
// // stack.pop()
// console.log(stack.display());
// // console.log(stack);

//------------------------------------

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
//         this.first = this.first.next
//     }

//     display(){
//         let temp = this.first
//         let value = ''
//         while(temp){
//             value += `${temp.value} `
//             temp = temp.next
//         }
//         return value
//     }
// }

// const queue = new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.dequeue(30)
// console.log(queue.display());

//----------------------------------

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.first = null
//         this.size = 0
//     }

//     push(value){
//         const node = new Node(value)
//         if(!this.first){
//             this.first = node
//         }
//         else{
//             let temp = this.first
//             this.first = node
//             this.first.next = temp
//         }
//         this.size++
//     }

//     pop(){
//         this.first = this.first.next
//         this.size--
//     }
//     isEmpty(){
//         return this.size === 0
//     }

//     display(){
//         let temp = this.first
//         let value = ''
//         while(temp){
//             value += `${temp.value} `
//             temp = temp.next
//         }
//         return value
//     }
// }



// class Queue{
//     constructor(){
//         this.stack1 = new Stack()
//         this.stack2 = new Stack()
//     }

//     enqueue(value){
//         this.stack1.push(value)
//     }

//     dequeue(){
//         if(this.stack2.isEmpty()){
//             if(!this.stack1.isEmpty()){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         this.stack2.pop()
//     }
//     // display(){
//     //     let temp = this.stack2.first
//     //     while (temp !==null) {
//     //         console.log(temp.value);
//     //         temp = temp.next
            
//     //     }
//     // }
// }

// const queue = new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// // queue.dequeue()
// // queue.enqueue(30)
// console.log(queue.stack1);