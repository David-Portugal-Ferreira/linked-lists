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

    }
    size() {

    }
    // head(){

    // }
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