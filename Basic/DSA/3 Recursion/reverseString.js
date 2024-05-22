// function revereseString(str){
//     if(str.length<=1){
//         return str
//     }
//     let lastword = str[str.length-1];
//     str.pop()
//     return lastword +" "+ revereseString(str)
// }

// let str = 'my name is samanway'
// let send = str.split(' ')
// console.log(send);

// console.log(revereseString(send));










function reverseString(str){
    if(str.length<=1){
        return str
    }
    lastword = str[str.length-1]
    str.pop()
    return lastword +" "+ reverseString(str)
}


let str = 'my name is samanway'
let send = str.split(' ')
console.log(reverseString(send));








