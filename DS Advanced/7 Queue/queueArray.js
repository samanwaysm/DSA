class Queue{
    constructor(){
        this.arr = []
    }

    enqueue(value){
        this.arr.push(value)
    }

    dequeue(){
        return this.arr.shift()
    }

    isEmpty(){
        return this.arr.length === 0
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }

    size(){
        return this.arr.length
    }

    display(){
        console.log(this.arr.toString());
    }

}

const queue = new Queue()

if(queue.isEmpty()){
    console.log('Queue is empty');
}

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.display()
console.log(queue.size());

queue.dequeue()

queue.display()
console.log(queue.size());