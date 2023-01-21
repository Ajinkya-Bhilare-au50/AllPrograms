// JavaScript Array Map Method Practice in 5 Minutes
// James Q Quick
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

/* 
MAP
1.Get an array of all names
2.Get an array of all heights
3.Get an array of objects with just name and height properties
4.Get an array of all first names
REDUCE
1.Get the total mass of all characters
2.Get the total height of all characters
3.Get the total number of characters in all the character names
4.Get the total number of characters by eye color (hint. a map of eye color to count)
FILTER
1.Get characters with mass greater than 100
2.Get characters with height less than 200
3.Get all male characters
4.Get all female characters
SORT
1.Sort by name
2.Sort by mass
3.Sort by height
4.Sort by gender
EVERY
1.Does every character have blue eyes?
2.Does every character have mass more than 40?
3.Is every character shorter than 200?
4.Is every character male?
SOME
1.Is there at least one male character?
2.Is there at least one character with blue eyes?
3.Is there at least one character taller than 200?
4.Is there at least one character that has mass less than 50?

*/

// arrNames = characters.map((nam) => {
//   return nam.name;
// });
// arrheights = characters.map((nam) => {
//   return nam.heights;
// });
//name and height only
// arrHN = characters.map((nam) => ({
//   name: nam.name,
//   height: nam.height,
// }));
// console.log(arrHN);
// const firstNames = characters.map((mattr) => {
//   return mattr.name.split(" ")[0];
// });
// // console.log(firstNames);
// //adding key property to object
// const insertID = characters.map((tu, index) => {
//   return { ...tu, key: index };
// });
// console.log(insertID);

// elligibility
// const elligi = characters.map((pat) => {
//   temp = pat.height;
//   temp = temp * 1;
//   //   console.log(temp);
//   if (temp > 150) {
//     return { ...pat, Elligibility: `Yes` };
//   } else return { ...pat, Elligibility: `No` };
// });
// console.log(elligi);

//Delete a key value pair

// heightDel = characters.map((panda) => {
//   if (panda.height) {
//     delete panda.height;
//     return { ...panda };
//   }
// });

// console.log(heightDel);

var arr1 = [
  { name: "lang", value: "English" },
  { name: "age", value: "18" },
];
var arr2 = [
  { name: "childs", value: "5" },
  { name: "lang", value: "German" },
];

Array.prototype.push.apply(arr1, arr2);

// console.log(arr1);

attArr = characters.map((tim, index) => {
  att = ["B0117", "B5019", "B0821", "B0098"];
  temp = att[index];
  return { ...tim, UniqueId: temp };
});
console.log(attArr);

// -----------------------------------------------------------------
// =================================================================
// Map, Filter, Reduce javascript
//=================================
let myarray = [
  {
    name: "John",
    city: "london",
    dept: "computer",
    salary: 1000,
  },
  {
    name: "bella",
    city: "new york",
    dept: "fianance",
    salary: 1000,
  },
  {
    name: "justine",
    city: "paris",
    dept: "computer",
    salary: 1000,
  },
];
console.log("myarray : ", myarray);
// ----------------------------------
// map
let mapArray = myarray.map(function (item) {
  return item.name;
});
console.log("mapArray : ", mapArray);
// ----------------------------------
//filter
let filterArray = myarray.filter(function (item) {
  if (item.dept == "computer") {
    return true;
  } else {
    return false;
  }
});
console.log("filterArray : ", filterArray);
// ----------------------------------
//reduce
// 1.
let reduceArray1 = myarray.reduce(function (acc, item) {
  return acc + item.salary;
}, 0);
console.log("reduceArray1 : ", reduceArray1);
// ------
// 2.
let reduceArray2 = myarray.reduce(
  function (acc, item) {
    if (item.dept == "computer") {
      acc.com.push(item.name);
    } else {
      acc.finance.push(item.name);
    }
    return acc;
  },
  { com: [], finance: [] }
);
console.log("reduceArray2 : ", reduceArray2);
// ----------------------------------
