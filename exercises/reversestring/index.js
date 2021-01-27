// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // SOLUTION 1
    // return str.split('').reverse().join('')

    // SOLUTION 2
    // let result = ''
    // for(let char of str){
    //     result = char + result
    // }
    // return result

    // LC: SOLUTION 3 
    return str.split('').reduce((reversed, character) =>
        character + reversed
    , '');
}

reverse('bear');

module.exports = reverse;
