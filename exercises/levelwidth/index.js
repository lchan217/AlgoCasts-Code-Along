// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const array = [root, 'end']
    const counters = [0]

    // > 1 because 'end' should be only element at end
    while(array.length > 1){
        const first = array.shift()

        if(first === 'end'){
            counters.push(0)
            array.push('end')
        } else {
            array.push(...first.children)
            counters[counters.length - 1]++
        }
    }
    return counters
}

module.exports = levelWidth;
