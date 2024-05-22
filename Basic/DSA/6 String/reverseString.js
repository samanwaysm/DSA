function reverese(str){
    let arr = []
    let ltr = ''
    let newStr = str.split('')
    for(i=newStr.length-1;i>=0;i--){
        if(newStr[i] == ' '){
            arr.push(ltr)
            ltr = ''
        }else{
            ltr += newStr[i]
        }
    }
    arr.push(ltr)
    return arr[1] + " " + arr[0]
}

console.log(reverese('hello world'));