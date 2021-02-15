// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// anything on the left - max is the parent
// anything on the right - min is the parent
function validate(node, min = null, max = null){
    if(max !== null && node.data > max){
        return false
    } 
    
    if(min !== null && node.data < min){
        return false
    }

    // around 8 min
    if(node.left && !validate(node.left, min, node.data)){
        return false
    }

    if(node.right && !validate(node.right, node.data, max)){
        return false
    }

    return true
}

module.exports = validate;
