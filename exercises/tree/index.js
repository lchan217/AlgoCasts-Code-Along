// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data){
        this.data = data
        this.children = []
    }

    add(data){
        this.children.push(new Node(data))
    }

    // LC: review
    remove(data){
        this.children = this.children.filter(node => {
            return node.data !== data;
        })
    }
}

class Tree {
    constructor(){
        this.root = null
    }

    // think org chart! print out in order of importance
    traverseBF(fn){
        const array = [this.root]

        while(array.length){
            const first = array.shift()
            
            // array.push(first.children) - would result in nested array like
            // [node, [node, node]]

            // ok
            // for(let child of first.children){
            //     array.push(child)
            // }

            // modern syntax
            array.push(...first.children)

            fn(first)
        }

    }

    traverseDF(fn){
        const array = [this.root]

        while(array.length){
            const first = array.shift()

            array.unshift(...first.children)

            fn(first)
        }

    }
}

module.exports = { Tree, Node };
