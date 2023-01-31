let str = " Mahesh joawar kumar ";

console.log(str.length);
console.log(str.toLocaleLowerCase());
console.log(str.toLocaleUpperCase());
console.log(str.charAt(7));
//to get the last character in string
console.log(str.charAt(str.length - 1));
console.log(str.indexOf("r"));
console.log(str.trim()); //removes extra whitespace from left and right
//chaining the methods together
//startswith returnstrue or false value
console.log(str.trim().toLowerCase().startsWith("mahesh"));
console.log(str.includes("kumar"));
console.log(str.slice(0, 9)); //slice the content from---it doesnt includes charAt 9
console.log(str.slice(-4)); //slice the string from end

let vtr = "Hie Jackson";
console.log(vtr);
vtr.length;
vtr.charAt(2);
vtr.endsWith("d");
vtr.includes("hie");
vtr.indexOf(Jack);
vtr.match();
vtr.repeat(2);
vtr.replace("Jack", "Pack");
vtr.slice(6, 10);
vtr.split(" ");
vtr.startsWith("hello");
str.substring(6, 2);
vtr.toLowerCase();
vtr.toUpperCase();
