// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// 1 - 1
// 2 - 3
// 3 - 5
// 4 - 7
function pyramid(n, row = 0, level = "") {
    // SOLUTION 2 - recursive
    const maxCol = n * 2 - 1
    const midpoint = Math.floor(maxCol/2)

    //base case
    if(row === n){
        return
    }

    if(level.length === maxCol){
        console.log(level)
        return pyramid(n, row + 1)
    }

    let add;
    if(midpoint - row <= level.length && midpoint + row >= level.length ){
        add = "#"
    } else {
        add = " "
    }

    pyramid(n, row, level + add)
}

// SOLUTION 1
// const maxCol = n * 2 - 1
// const midpoint = Math.floor(maxCol/2)

// for(let row = 0; row < n; row++){
//     let level = ""
//     for(let col = 0; col < maxCol; col++){
//         if(midpoint + row >= col && midpoint - row <= col){
//             level += "#"
//         } else {
//             level += " "
//         }
//     }
//     console.log(level)
// }

module.exports = pyramid;
