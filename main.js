LinkedList = require("./linkedList")

const list = new LinkedList();

list.append("dog");
list.append("cat");
console.log(list.head)
list.prepend("bird");
console.log(list.head)
console.log(list.size())