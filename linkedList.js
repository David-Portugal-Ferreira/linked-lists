class LinkedList {

    head = null;

    append(value) {
        if(this.head === null) {
            this.head = new Node(value)
        } else {
            let tmp = this.head;
            while(tmp.nextNode !== null) {
                tmp = tmp.nextNode;
            }
            tmp.nextNode = new Node(value);
        }
    }
    prepend(value) {
        let tmp = this.head;
        this.head = new Node(value);
        this.head.nextNode = tmp;
    }
    size() {
        let tmp = this.head;
        let numberOfNodes = 0;
        if(tmp !== null) numberOfNodes++;
        while(tmp.nextNode !== null) {
            numberOfNodes++;
            tmp = tmp.nextNode;
        }
        return numberOfNodes
    }
    top(){
        let data = this.head.value;
        let nextNode = this.head.nextNode.value;
        return {data, nextNode};
    }
    tail() {
        
    }
    at(index) {

    }
    pop() {

    }
    contains(value) {

    }
    find(value) {

    }
    toString() {

    }
    insertAt(value, index) {

    }
    removeAt(index) {

    }
    
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

module.exports = LinkedList;