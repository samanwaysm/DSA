class Heap{
    constructor(){
        this.heap = [];
        this.size = 0;
    }

    poll(){
        if(!this.size)return null;
        this.heap[0] = this.heap.pop();
        this.size--;
        this.heapifyDown();
    }

    add(value){
        this.heap.push(value)
        this.size++
        this.heapifyUp()
    }

    hasLeftchild(index){
        if(this.heap[index*2 + 1]){
            return true
        }else{
            return false
        }
    }

    hasRightchild(index){
        if(this.heap[index*2 + 2]){
            return true
        }else{
            return false
        }
    }

    getLeftChildIndex(index){
        return index*2 + 1
    }

    getRightChildIndex(index){
        return index*2 +2
    }

    leftChild(index){
        return this.heap[index*2 + 1]
    }

    rightChild(index){
        return this.heap[index*2 + 2]
    }

    getParentIndex(index){
        return Math.floor((index - 1) / 2)
    }

    hasParent(index){
        if(this.getParentIndex(index)>=0){
            return true
        }else{
            return false
        }
    }
    
    parent(index){
        let i = Math.floor((index-1) / 2)
        return this.heap[i]
    }

    heapifyDown(){
        let index = 0;

        while(this.hasLeftchild(index)){
            let smallerChildIndex = this.getLeftChildIndex(index)
            if(this.getRightChildIndex(index) && this.rightChild(index)<this.leftChild(index)){
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if(this.heap[index]>this.heap[smallerChildIndex]){
                [this.heap[index],this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex],this.heap[index]]
            }else{
                break;
            }
            index = smallerChildIndex
        }
    }

    heapifyUp(){
        let index = this.size -1;
        while(this.hasParent(index) && this.parent(index)>this.heap[index]){
            [this.heap[index],this.heap[this.getParentIndex(index)]] = [this.heap[this.getParentIndex(index)],this.heap[index]]
        }
    }

    display(){
        console.log(this.heap);
    }

    heapSort(){
        let sortedArray = []
        while(this.size>0){
            sortedArray.push(this.heap[0]);
            this.poll()
        }
        return sortedArray
    }
}


const heap = new Heap()

heap.add(3)
heap.add(19)
heap.add(20)
heap.add(29)
heap.add(9)
heap.add(40)

heap.add(10)
heap.add(13)

console.log(heap.heap);
heap.poll()
console.log('\nAfter remove first value  :');
heap.display()
