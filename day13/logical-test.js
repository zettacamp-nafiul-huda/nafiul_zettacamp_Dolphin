
function isPrime(n){
    if (n <= 1) {
        return false
    }
    if (n > 2 && n % 2 === 0){
        return false
    }
    if (n > 3 && n % 3 === 0) {
        return false
    }
    if (n > 5 && n % 5 === 0) {
        return false
    } 
    if (n > 7 && n % 7 === 0) {
        return false
    } 
    if (n > 11 && n % 11 === 0) {
        return false
    } 
    if (n > 13 && n % 13 === 0) {
        return false
    }
    if (n > 17 && n % 17 === 0) {
        return false
    }
    if (n > 29 && n % 29 === 0) {
        return false
    }
    if (n > 23 && n % 23 === 0) {
        return false
    }
    if (n > 29 && n % 29 === 0) {
        return false
    }
    if (n > 31 && n % 31 === 0) {
        return false
    }
    if (n > 37 && n % 37 === 0) {
        return false
    }
    if (n > 41 && n % 41 === 0) {
        return false
    }
    if (n > 43 && n % 43 === 0) {
        return false
    }
    if (n > 47 && n % 47 === 0) {
        return false
    }
    if (n > 53 && n % 53 === 0) {
        return false
    }
    if (n > 59 && n % 59 === 0) {
        return false
    }
    if (n > 61 && n % 61 === 0) {
        return false
    }
    if (n > 67 && n % 67 === 0) {
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


let total = []
for (let i = 0; i <=1000; i+=1){
    if (isPrime(i) == true){
        console.log(i);
        total.push(i)
    }
    
}

console.log("Total :")
console.log(total.length)