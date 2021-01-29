// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size){
    // LC: SOLUTION 1
    // const result = [];
  
    // for(let n of array){
    //   const last = result[result.length - 1]
    //   if(!last || last.length === size){
    //     result.push([n])
    //   } else {
    //     last.push(n)
    //   }
    // }

    // return result

    // LC: SOLUTION 2
    const result = []
    let index = 0

    while(index < array.length){

        result.push(array.slice(index, index + size))
        index += size
    }

    return result
}

module.exports = chunk;
