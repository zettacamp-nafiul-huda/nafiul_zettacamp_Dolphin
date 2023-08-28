function isPrime(n){
    if ((n <= 1) || (n > 2 && n % 2 === 0) || (n > 3 && n % 3 === 0) || (n > 5 && n % 5 === 0) || (n > 7 && n % 7 === 0) || (n > 11 && n % 11 === 0)) {
        return false
    }
    if (n === 2){
        return true
    }
    if (n === 3){
        return true
    }
    if (n === 5){
        return true
    }
    if (n === 7){
        return true
    }
    else return true
}



// checking 1 - 100 -> 25 prime number
let total = []
for (let i = 0; i <=100; i+=1){
    if (isPrime(i) == true){
        total.push(i)
    }
    
}

console.log("Total prime number:")
console.log(total.length)

console.log("Prime on not:")
console.log(isPrime(9));
console.log(isPrime(49));