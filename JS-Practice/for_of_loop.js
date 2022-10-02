//Assuming any Random Array
let Arry = [4, 5, 6, 56, 89, 78, 0, -15, 1000];
max = -Infinity; //initialise max
//iterates over Array
for (let index of Arry) {
  if (index > max) max = index;
}
//Prints the maximum number
console.log("Maximum Number in the given Array " + Arry + " is ==> " + max);


/* 
-------------------Output------------------------------------------------
 Maximum Number in the given Array 4,5,6,56,89,78,0,-15,1000 is ==> 1000 
 
 */