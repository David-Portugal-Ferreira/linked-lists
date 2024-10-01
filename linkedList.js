class LinkedList {

    head = null;

    append(value) {
        if(this.head === null) {
            this.head = new Node(value)
        } else {
            let tmp = this.head.nextNode;
            console.log(tmp, value);
            while(tmp !== null) {
                tmp = tmp.nextNode
            }
            tmp = new Node(value);
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
    value = null
    nextNode = null

    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

module.exports = LinkedList;