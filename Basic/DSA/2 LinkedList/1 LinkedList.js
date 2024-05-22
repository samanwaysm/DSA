class Node{
    constructor(value){
        this.value = value
        this.next =null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0
    }

    push(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
        return this
    }

    pop(){
        let temp = this.head
        let prev = temp
        if(this.head === null){
            return undefined
        }else{
            while(temp.next !== null){
                prev = temp
                temp = temp.next
            }
            this.tail = prev
            this.tail.next = null
            this.size--
            if(this.length===0){
                this.head =null
                this.tail = null
            }
        }
        return this
    }
    
    shift(){
        // let temp = this.head
        // if(this.isEmpty()){
        //     return undefined
        // }
        // if(!temp.next){
        //     this.tail = null
        // }
        // this.head = temp.next
        this.head = this.head.next
        this.size--
        return this
    }

    unshift(value){
        const node = new Node(value)
        if(this.isEmpty()){
            return undefined
        }else{
            let temp = this.head
            this.head = node
            this.head.next = temp
        }
        this.size++
        return this
    }

    get(index){
        let pos =0;
        let element = this.head
        while(pos !== index){
            pos++
            element = element.next
        }
        console.log(element.value);
        return element
    }  

    set(index, value){
        let element = this.get(index)
        element.value = value
    }

    insert(index,value){
        const node = new Node(value)
        if(this.isEmpty()){
            return empty
        }
        if(index === 0){
            return this.unshift(val)
        }
        if (index === this.size) {
            return this.push(val)
        }
        let pos=0
        let temp = this.head;
        // let temp
        let prev 
        while(pos !== index){
            pos++
            prev = temp
            temp = temp.next
        }
        temp = prev.next
        prev.next = node
        node.next = temp
        this.size++
        return this
    }

    remove(index){
        if(this.isEmpty()){
            return undefined
        }
        if(index === 0){
            return this.shift()
        }
        if(index === this.size){
            return this.pop()
        }
        let pos = 0;
        let temp = this.head
        let prev
        while(pos !== index){
            pos++
            prev = temp
            temp = temp.next
        }
        temp = prev.next
        prev.next = temp.next
        this.size--
        return this
    }

    middleElement(){
        let index = Math.floor(this.size/2)
        let temp = this.head
        let prev
        while(temp.next !== index){
            prev = temp
            temp = temp.next
        }
        console.log(prev.value); 
    }


    print(){
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
            let temp = this.head
            let listValues =''
            while(temp){
                listValues += `${temp.value} `
                temp = temp.next
            }
            console.log(listValues);
        }

    }
}

const list = new LinkedList()


list.push(10)
list.push(15)
list.push(20)
list.push(25)
list.push(30)
list.print()
// list.pop()
// list.shift()
// list.unshift(25)
// list.print()
// list.get(2)

// list.set(2,35)
// list.insert(2,8)
// list.print()
// list.remove(1)
// list.print()

list.middleElement()