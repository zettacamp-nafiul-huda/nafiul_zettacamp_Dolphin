function hasUniqueCharacters(str) {
    // Create an empty object to store encountered characters
    let charSet = {};
    

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        console.log(char);
        // If the character is already in the charSet, it's not unique
        if (charSet[char]) {
            return false;
            
        }
        
        // Otherwise, mark it as encountered
        charSet[char] = true;
    }
    
    // If we've looped through the entire string without finding duplicates, it's unique
    return true;
    console.log(charSet);
}

// Example usage:
const testString1 = "abcdefg"; // Unique characters
const testString2 = "hello";   // Not unique characters

console.log(hasUniqueCharacters(testString1)); // Output: true
console.log(hasUniqueCharacters(testString2)); // Output: false
