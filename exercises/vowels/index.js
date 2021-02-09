// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // SOLUTION 1
    // g - global, i - case insensitive
    // let num = str.match(/[aeiouAEIOU]/gi)
    // return num ? num.length : 0

    // SOLUTION 2
    let counter = 0
    const matching = "aeiou"
    for(let char of str.toLowerCase()){
        if(matching.includes(char)){
            counter += 1
        }
    }
    return counter
}

module.exports = vowels;
