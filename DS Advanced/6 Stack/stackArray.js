class Stack{
    constructor(){
        this.arr = []
    }
    push(value){
        this.arr.unshift(value)
    }

    pop(){
        this.arr.shift()
    }

    display(){
        console.log(this.arr);
    }
    
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

stack.display()

stack.pop()

stack.display()




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