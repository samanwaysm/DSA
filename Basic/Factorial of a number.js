// n = 1;
// fact = n;
// for(i=n-1;i>0;i--){
//     fact = fact*i
// }

// console.log(fact);

//------------------------------------

function factorial(n){
    let result = 1
    for (let i = 2;i <= n; i++){
        result = result * i
    }
    return result
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));


// Big-O => O(n)