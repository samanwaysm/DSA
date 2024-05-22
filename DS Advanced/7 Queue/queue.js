class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(value){
        const node = new Node(value)
        if(!this.first){
            this.first = node
            this.last = node            
        }else{
            this.last.next = node
            this.last = node
        }
        this.size++
    }
    dequeue(){
        if(!this.first) return null
        if(this.first === this.last)this.last = null
        this.first = this.first.next
        this.size--
    }

    display() {
        let curr = this.first;
        let values = ''
        while (curr) {
            values +=`${curr.value} `
            curr = curr.next;
        }
        return values
    }

}

const queue = new Queue()

queue.enqueue('1st')
queue.enqueue('2nd')
queue.enqueue('3rd')
queue.enqueue('4th')

console.log(queue.display());

queue.dequeue()

console.log(queue.display());