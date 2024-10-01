LinkedList = require("./linkedList")

const list = new LinkedList();

list.append("dog");
console.log(list.head.value + " head  value")
list.append("cat");
console.log(list.head.nextNode)