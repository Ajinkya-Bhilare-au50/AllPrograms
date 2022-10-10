//set object -stores a collection of unique values of any type
//new set()
// add (value)
/* 
delete(value)
clear()
has(value)
iterators
enteries(),keys(),values(),forEach()


*/
const unique = new Set();
console.log(unique);
const random = "third";
unique.add("first");
unique.add("second");
unique.add(random);
unique.add("first");
unique.add(4);
const result = unique.delete("third");
console.log(unique);
