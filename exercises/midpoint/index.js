// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// the plan: 
// slow - go forward 1 nodes
// fast - go forward 2 nodes
// is fast and the node after that defined?

function midpoint(list) {
    let slow = list.head
    let fast = list.head
    
    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }
   return slow
}

module.exports = midpoint;
