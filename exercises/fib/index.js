// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
    // My SOLUTION
    // const array = [0, 1]
    // for(let i = 1; i <= n; i++){
    //     let sum = array[i-1] + array[i]
    //     array.push(sum)
    // }
    // return array[n]

    // SOLUTION 1
    // const result = [0,1]

    // for(let i = 2; i <= n; i++){
    //     const a = result[i-1]
    //     const b = result[i-2]
    //     result.push(a+b)
    // }
    // return result[n]

    // SOLUTION 2 - exponential!!
    // fib is being called multiple times with same argument
    // memoization! - store arguments and its result, so you can return 
    // precomputed result instead of running function again
    
    // if(n < 2){
    //     return n
    // }

    // return fib(n-1) + fib(n-2)
// }

// SOLUTION 3 - memoized
function memoize(fn){
    const cache = {}
    return function(...args){
        if(cache[args]){
            return cache[args]
        }

        const result = fn.apply(this, args)
        cache[args] = result
        return result
    }
}

function slowFib(n){
    if(n < 2){
        return n
    }

    return fib(n-1) + fib(n-2)
}

const fib = memoize(slowFib)

module.exports = fib;
