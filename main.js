LinkedList = require("./linkedList")

const list = new LinkedList();

// list.append("dog");
// list.append("cat");
// console.log(list.head)
// list.prepend("bird");
// console.log(list.head)
// console.log(list.size())
// console.log(list.top())
// console.log(list.tail())
// console.log(list.at(2));
// console.log(list.pop());
// console.log(list.head)
// console.log(list.contains("bird"))
// console.log(list.find("dog"));

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());