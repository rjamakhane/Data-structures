class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    insert(data) {
        let node = new Node(data);
        if (!this.length) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return node;
    }

    insertFirst(data) {
        return this.insertAt(data, 0);
    }

    insertLast(data) {
        return this.insertAt(data, this.size() - 1);
    }

    size() {
        return this.length;
    }

    insertAt(data, pos) {
        let node = new Node(data);
        if (!this.length) {
            this.head = node;
            this.tail = node;
        }
        else {
            let currentNode = this.getAt(pos);
            if (pos === 0) {
                node.next = currentNode;
                currentNode.prev = node;
                this.head = node;
            }
            else if (pos >= this.length) {
                this.tail.next = node;
                node.prev = this.tail;
                this.tail = node;
            }
            else {
                node.prev = currentNode.prev;
                currentNode.prev.next = node;
                node.next = currentNode;
                currentNode.prev = node;
            }
        }
        this.length++;
        return node;
    }

    getAt(pos) {
        if (!this.length) {
            return null;
        }
        else {
            let index = 0;
            let currentNode = this.head;
            while (index !== pos && index < this.length) {
                currentNode = currentNode.next;
                index++;
            }
            return currentNode;
        }
    }

    getFirst() {
        return this.getAt(0);
    }
    getLast() {
        return this.getAt(this.size() - 1);
    }

    removeAt(pos) {
        if (!this.length) {
            return null;
            this.length--;
        }
        else {
            let currentNode = this.getAt(pos);
            if (currentNode.next != null) {
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;
            }
            else {
                this.tail = currentNode.prev;
                currentNode.prev.next = null;
            }
            this.length--;
            return currentNode;
        }
    }

    removeFirst() {
        return this.removeAt(0);
    }
    removeLast() {
        return this.removeAt(this.size() - 1);
    }

    forEach(fn) {
        let node = this.head;
        let index = 0;
        while (node.next) {
            fn(node, index);
            node = node.next;
            index++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node.next) {
            yield node;
            node = node.next;
        }
    }

}

let list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insertAt(4, 0);
list.insertFirst(6);
list.insertLast(7);
// list.forEach(function (obj, index) {
//     obj.data += 10;
// });
for (let node of list) {
    node.data += 10;
}
console.log(list);
