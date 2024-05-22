class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        let node = new Node(value)
        if(!this.first){
            this.first = node
            this.last = node
        }else{
            let temp = this.first
            this.first = node
            this.first.next = temp
        }
        this.size++
    }

    pop(){
        if(!this.first)return null
        if(this.first === this.last)this.last = null
        this.first = this.first.next
        this.size--
    }

    isEmpty(){
        return this.size === 0
    }

}

const stack = new Stack()

stack.push('hii')
stack.push(2)
stack.push('abc')
stack.push(3)
stack.push('xyz')
console.log(stack);
stack.pop()
console.log(stack);