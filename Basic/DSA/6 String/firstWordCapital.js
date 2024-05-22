let str = "hello world"

str = str.split(" ")

let capital = str.map((word)=>{
    return word.charAt(0).toUpperCase()+word.slice(1)
})
console.log(capital.join(' '));