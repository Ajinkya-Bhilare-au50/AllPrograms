//powerfull Array Methods
/* forEach,Map,filter,find,reduce
Iterate over array-no for loop required 
accept callback function as argument ,calls callback against each item in a array. 
Reference Item in the CallBack parameter.
*/
// const numbers = [0, 1, 2, 3, 4];
// show all number
// for (let i = 0; i < numbers.length; i++) {
//   console.log(number[i]);
// }
//forEach -it doesnt return new array
//find doesnot return new array

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "pandit", age: 25, position: "gadget developer" },
  { name: "bob", age: 29, position: "text-developer" },
];
function tempo(person) {
  console.log(person.position.toUpperCase());
}
//people.forEach(tempo);   --------Alternate to this line

// below is anonymous callback functions
people.forEach(function(item){
console.log(item.position.toUpperCase());
})

const ages =people.map(function(person){
    console.log(person)
    return 'hello world';
});
console.log(ages);

// functions by default returns undefined


