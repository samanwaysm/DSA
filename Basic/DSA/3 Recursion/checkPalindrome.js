function isPalindrome(str){
    str = str.toLowerCase();
    if (str.length<=1){
        return true
    }
    if (str[0] !== str[str.length-1]){
        return false
    }
    return isPalindrome(str.slice(1,-1))
}

let str = 'Malayalam'
console.log(isPalindrome(str));
console.log(isPalindrome('Samanway'));
