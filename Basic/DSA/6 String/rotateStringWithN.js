function rotate(str,n){
    const newStr = str.split("")
    const arr = []
    const arr1 = []

    for(let i=n;i<newStr.length;i++){
        arr.push(newStr[i])
    }

    for(let i=0;i<n;i++){
        arr1.push(newStr[i])
    }


    return arr.concat(arr1).join("")
}

console.log(rotate("APPLE",2));