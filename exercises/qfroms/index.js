// queue from stack

// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');
// stack 1 => stack 2 => new queue
class Queue {
    constructor(){
        this.first = new Stack();
        this.second = new Stack();
    }

    // add to first stack
    add(record){
        this.first.push(record)
    }

    // move everything to the second stack to 
    // get to the bottom of the first stack so you can 
    // pop it off
    // then move everything back to first stack to restore
    // in order for next operation
    remove(){
        while(this.first.peek()){
            this.second.push(this.first.pop())
        }
        const record = this.second.pop()

        while(this.second.peek()){
            this.first.push(this.second.pop())
        }

        return record
    }
    
    // peek and restore to first stack
    peek(){
        while(this.first.peek()){
            this.second.push(this.first.pop())
        }

        const record = this.second.peek()

        while(this.second.peek()){
            this.first.push(this.second.pop())
        }
        return record
    }
}

module.exports = Queue;
