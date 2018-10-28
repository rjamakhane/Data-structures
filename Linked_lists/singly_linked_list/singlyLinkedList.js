class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
};

class SinglyList {
    constructor() {
        this.head = null;
        this._length = 0;
    }
    unshift(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this._length++;
        return newNode;
    }
    add(value) {
        const newNode = new Node(value);

        let currentNode;

        if (!this.head) {
            this.head = newNode;
            this._length++;
        }
        else {
            currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            this._length++;
        }
        return newNode;
    }
    insertAt(value, position) {
        if (position <= this._length) {
            const newNode = new Node(value);
            let count = 0;
            let prev, curr;
            if (position == 0) {
                newNode.next = this.head;
                this.head = newNode;
            }
            else {
                curr = this.head;
                let it = 0;
                while (it < position) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = newNode;
                newNode.next = curr;
            }
            this._length++;
        }
        else {
            console.log("Inavlid position");
            return false;
        }
    }
    removeFrom(position) {
        if (position <= this._length) {
            let curr, prev, it;
            if (position == 0) {
                this.head = this.head.next;
            }
            else {
                curr = this.head;
                it = 0;
                while (it < position) {
                    it++
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this._length--;
        }
        else {
            console.log("Inavlid position");
            return false;
        }
    }
    removeElement(value) {
        let curr = this.head;
        let prev = null;
        let it = 0;
        while (curr && curr.data != value && it <= this._length) {
            it++;
            prev = curr;
            curr = curr.next;
        }
        if (prev)
            prev.next = curr && curr.next;
        else
            this.head = curr && curr.next;

        this._length--;
    }
}

var obj = new SinglyList();
console.time('label');
obj.add(1);
obj.add(2);
obj.add(3);
obj.add(4);
obj.add(5);
obj.add(6);

obj.removeElement(5);
console.log(obj);
console.timeEnd('label');
