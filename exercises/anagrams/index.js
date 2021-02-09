// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // SOLUTION 1
    // const a = buildCounter(stringA)
    // const b = buildCounter(stringB)

    // if (Object.keys(a).length !== Object.keys(b).length){
    //     return false
    // }

    // for(let char in a){
    //     if(a[char] !== b[char]){
    //         return false
    //     }
    // }
    // return true

    // SOLUTION 2
    return cleanString(stringA) === cleanString(stringB)
}

// helpers
function buildCounter(string){
    const map = {}
    for(let char of string.replace(/[^\w]/g).toLowerCase()){
        map[char] = map[char]++ || 1
    }

    return map
}

function cleanString(string){
    return string
        .replace(/[^\w]/g)
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}

module.exports = anagrams;
