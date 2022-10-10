const Tshirt1 = {
  color: "red",
  size: 33,
  brand: "Van Heusen",
  usage: "Male",
};
Tshirt2 = Tshirt1; //copied to another Object Tshirt2
console.log("\n Original Objects ");
console.log(`Tshirt1 ${JSON.stringify(Tshirt1)}`);
console.log(`Tshirt2 ${JSON.stringify(Tshirt2)}`);
Tshirt2.color = "blue"; //Changing color of Tshirt2
Tshirt2.size = 14; //changing size of Tshirt2
console.log("----------------------------------------------------------------");
console.log("\n Modified Object ");
console.log(`Tshirt1 ${JSON.stringify(Tshirt1)}`);
console.log(`Tshirt2 ${JSON.stringify(Tshirt2)}`);
console.log("\n Observation :Changes in Tshirt2 reflects in Tshirt1 also ");
console.log(` if we use the assignment operator for Duplicating arrays, 
 it will not copy the value.Instead both object variables will refer to the same object in the memory
 As it creates a shallow copy of objects which points to the same reference in the memory.`);
