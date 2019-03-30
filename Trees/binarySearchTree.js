class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(item) {
        let newNode = new Node(item);
        if (this.root === null) {
            this.root = newNode;
        }
        else
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (node === null) {
            return null;
        }
        else if (data < node.value) { //for recursion
            node.left = this.removeNode(node.left, data);
            return node;
        }
        else if (data > node.value) {//for recursion
            node.right = this.removeNode(node.right, data);
            return node;
        }
        else {
            //delet operation
            // case 1 if node without child
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            else if (node.left === null) { //case 2 node with one child
                node = node.right;
                return node;
            }
            else if (node.right === null) { //case 2 node with one child
                node = node.left;
                return node;
            }
            //case 3 if node has both children
            //solution A: In this case either find min value from right subtree and assign it to current node and delete node 
            //solution B : In this case  find max value from left subtree and assign it to current node and delete node
            else {
                //solution A:
                let tempNode = this.findMinNode(node.right);
                node.value = tempNode.value;
                node.right = this.removeNode(node.right, tempNode.value);
                return node;

                //solution B 
                // let tempNode = this.findMaxNode(node.left);
                // node.value = tempNode.value;
                // node.left = this.removeNode(node.left, tempNode.value);
                // return node;

            }
        }
    }

    findMinNode(node) {
        if (node.left === null) {
            return node;
        }
        else {
            return this.findMinNode(node.left);
        }
    }

    findMaxNode(node) {
        if (node.right === null) {
            return node;
        }
        else {
            return this.findMaxNode(node.right);
        }
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }

    preorder(node) {
        if (node != null) {
            console.log(node.value);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node) {
        if (node != null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.value);
        }
    }
}

const obj = new Tree();
obj.insert(15);
obj.insert(9);
obj.insert(16);
obj.insert(11);
obj.insert(15);
obj.insert(17);
obj.insert(10);
obj.insert(15);
obj.insert(16);
obj.insert(19);
// console.log(obj.root);
// obj.remove(16);
// console.logobj.findMaxNode(obj.root);
console.log(obj.inorder(obj.root));
console.log(obj.preorder(obj.root));
console.log(obj.postorder(obj.root));