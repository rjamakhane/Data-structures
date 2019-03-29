class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertFirst(data) {
        // this.head = new Node(data, this.head);
        // this.length++;

        //to reuse code
        this.insertAt(data, 0);
    }

    insertLast(data) {
        // const node = new Node(data);
        // let currentNode = this.head;
        // if (!this.head) {
        //     this.head = node;
        // }
        // else {
        //     while (currentNode.next !== null) {
        //         currentNode = currentNode.next;
        //     }
        //     currentNode.next = node;
        //     this.length++;
        // }

        //to reuse code
        this.insertAt(data, this.size());
    }

    size() {
        return this.length;
    }

    getFirst() {
        // return this.head;

        //to reuse code 
        return this.getAt(0);
    }

    getLast() {
        // if (!this.head) {
        //     return this.head;
        // }
        // else {
        //     let currentNode = this.head;
        //     while (currentNode.next !== null) {
        //         currentNode = currentNode.next
        //     }
        //     return currentNode;
        // }

        //to reuse code
        return this.getAt(this.size() - 1);
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    removeFirst() {
        // if (!this.head) {
        //     this.length = 0;
        //     return null;
        // }
        // else {
        //     this.head = this.head.next;
        //     this.length--;
        //     return this.head;
        // }

        // to reuse code
        this.removeAt(0);
    }

    removeLast() {
        // if (!this.head) {
        //     this.length = 0;
        //     return null;
        // }
        // else {
        //     let currentNode = this.head;
        //     while (currentNode.next !== null) {
        //         if (currentNode.next.next === null) {
        //             currentNode.next = null;
        //             this.length--;
        //         }
        //         else {
        //             currentNode = currentNode.next;
        //         }
        //     }
        // }

        // to reuse code
        this.removeAt(this.size());
    }

    getAt(pos) {
        if (!this.head) {
            return null;
        }
        else {
            let index = 0;
            let currentNode = this.head;
            while (index !== pos) {
                currentNode = currentNode.next;
                index++;
            }
            return currentNode;
        }
    }

    removeAt(pos) {
        if (!this.head) {
            return null;
        }
        else {
            let index = 0;
            let currentNode = this.head;
            let prev;
            while (index !== pos) {
                prev = currentNode;
                currentNode = currentNode.next;
                index++;
            }
            prev.next = currentNode.next;
            return this.head;
        }
    }

    insertAt(data, pos) {
        var newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            if (pos === 0) {
                newNode.next = this.head;
                this.head = newNode;
            }
            else {
                let prevNode = (pos < this.length) ? this.getAt(pos - 1) : this.getAt(this.length - 1);
                let temp = prevNode.next;
                prevNode.next = newNode;
                newNode.next = temp;
            }


        }
        this.length++;
    }

    forEach(fn) {
        let node = this.head;
        let index = 0;
        while (node) {
            fn(node, index);
            node = node.next;
            index++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

// var list = new LinkedList();
// list.insertFirst(10);
// list.insertFirst(20);
// list.insertLast(30);
// list.size();
// list.getFirst();
// list.getLast();
// list.clear();
// console.log(list);
// list.removeFirst();
// list.removeLast();
// console.log(list)
// console.log(list.insertAt(2, 1));
// console.log(list)

// list.forEach(node => {
//   console.log(node)
// node.data += 10;
// });



// list.insertLast(1);
// list.insertLast(2);
// list.insertLast(3);
// list.insertLast(4);

// list.forEach(node => {
// node.data += 10;
// });

// for (let node of list) {
//     node.data += 10;
// }
// console.log(list.getAt(0));





//-------------------------------------------------------------------------------------------------------------
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



function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

const l = new LinkedList();
l.insertLast('a')
l.insertLast('b')
l.insertLast('c')
l.insertLast('d')
l.insertLast('e')
console.log(midpoint(l));

//-------------------------------------------------------------------------------------------------------------
// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true


function circular(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}

const l = new LinkedList();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
l.head = a;
a.next = b;
b.next = c;
c.next = b;
console.log(circular(l)) // true

//-------------------------------------------------------------------------------------------------------------


// --- Directions
// Given a linked list and integer n, return the element n
// spaces from the last node in the list.  Do not call the
// 'size' method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (n > 0) {
        fast = fast.next;
        n--;
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}

const list = new LinkedList();
list.insertLast('a');
list.insertLast('b');
list.insertLast('c');
list.insertLast('d');
fromLast(list, 2).data // 'b'



