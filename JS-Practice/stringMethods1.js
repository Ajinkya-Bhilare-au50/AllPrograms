//javascript String Methods

console.log("king of hearts".charAt(6));
console.log("king of hearts".charCodeAt(1));
console.log("king of hearts".concat(" with love"));
console.log("king of hearts".endsWith("hearts"));
console.log("king of hearts".includes("of"));
console.log("king of hearts".indexOf("g"));
console.log("king of hearts".lastIndexOf("t"));
console.log("king of hearts".match("earts"));
console.log("king of hearts".matchAll("king"));
console.log("king of hearts ".repeat(4));
console.log("king of hearts".replace("king","bing"));
console.log("king of hearts".replaceAll("king","bing"));
console.log("king of hearts".search("hearts"));
console.log("king of hearts".slice("hear"));
console.log("king of hearts".split(""));
console.log("king of hearts".startsWith("k"));
console.log("king of hearts".substring(2,6));
console.log("king of hearts".toLowerCase());
console.log("king of hearts".toUpperCase());
console.log(" king of hearts ".trim());
console.log("king of hearts".valueOf());

/* 
----------------------------Output----------------------------------------------------
f
105
king of hearts with love
true
true
3
12
[ 'earts', index: 9, input: 'king of hearts', groups: undefined ]
Object [RegExp String Iterator] {}
king of hearts king of hearts king of hearts king of hearts 
bing of hearts
bing of hearts
8
king of hearts
[
  'k', 'i', 'n', 'g',
  ' ', 'o', 'f', ' ',
  'h', 'e', 'a', 'r',
  't', 's'
]
true
ng o
king of hearts
KING OF HEARTS
king of hearts
king of hearts


*/

