function hasUniqueCharacters(words) {
    let wordsOne = words;
    let wordsTwo = wordsOne.toString().split("");
    console.log(wordsTwo);
    let wordsThree = [...new Set(wordsTwo)];
    console.log(wordsThree);
    if (wordsTwo.length == wordsThree.length){
        return true
    } else return false
}

console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
console.log(hasUniqueCharacters(112345)); // Output: false