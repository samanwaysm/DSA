function summation(n){  // n = 4
    let sum = 0; // 1
    for(let i =1;i<=n; i++){
        sum += i; // 4
    }
    return sum; //  1
}

// Time complexity is 1+4+1   -----> 
// --> n+2  ----> n

// O(n) - Linear

let a = summation(4)
console.log(a);