const inventory = [
  { name: "apples", quantity: 2 },
  { name: "cherries", quantity: 8 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
  { name: "cherries", quantity: 15 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }

console.log("------------------------------------------------------");

const products = [
  { name: "Laptop", price: 32000, brand: "Lenovo", color: "Silver" },
  { name: "Phone", price: 700, brand: "Iphone", color: "Golden" },
  { name: "Watch", price: 3000, brand: "Casio", color: "Yellow" },
  { name: "Sunglass", price: 300, brand: "Ribbon", color: "Blue" },
  { name: "Camera", price: 9000, brand: "Lenovo", color: "Gray" },
];
const bigNumbers = products.find((product) => product.price > 4000);
console.log(bigNumbers);
//output:{ name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' }


//find method finds the first match from array
const model = products.find(function (w) {
  return w.price > 300;
});
console.log(model);
//it doesnot return multiple id match
//it will always return the first id match from the Object arrays
