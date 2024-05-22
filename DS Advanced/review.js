// let my_list = [64, 34, 25, 12, 22, 11, 90]
// console.log(insertionSort(my_list));
// function insertionSort(arr){
//     let temp,curr
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

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    push(value){
        const node = new Node(value)
        if(!this.first){
            this.first = node;
            this.last = node
        }else{
            let temp = this.first
            this.first = node
            this.first.next = temp
        }
    }

    pop(){
        if(!this.first)return null
        this.first = this.first.next
    }

    display(){
        let temp = this.first
        let value = ''
        while(temp){
            value += `${temp.value} `
            temp = temp.next
        }
        return value
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.display());

stack.pop()

console.log(stack.display());
