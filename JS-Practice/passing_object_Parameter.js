//objects into variables
//as function arguments
const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",

  siblings: { sister: "jane" },
};

function printPerson(person) {
  console.log(person.first);
  const { first, last, city } = person;
  console.log(first, last, city);
}

// Method2 destructuring in parameter itself
function printPerson(first, last, city) {
  //   console.log(person.first);
  //   const { first, last, city } = person;
  console.log(first, last, city);
}

printPerson(bob);
