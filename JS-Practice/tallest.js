var sortPeople = function (names, heights) {
  let people = []; //object array with names and height
  for (let i = 0; i < names.length; i++) {
    people.push({ name: names[i], height: heights[i] });
  }
  console.log(people);//enter elements in people object array
  people.sort((a, b) => b.height - a.height);
  //sorting the array with height
  console.log(people);//people array after sorting
  return people.map((p) => p.name);//returning names 
};
names = ["Mahesh", "Jayesh", "Trupti", "Pratik"];
heights = [45, 75, 56, 73];
console.log(sortPeople(names, heights));
