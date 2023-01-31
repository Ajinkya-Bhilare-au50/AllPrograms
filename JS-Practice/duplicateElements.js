/*
Example-2
var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

 */
// Function is used to remove duplicate elements in array
// ---------------------------------------------------------------
var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
// ----------------------------------------------------------------
console.log(removeDuplicates(arr));
// export syntax---->module.exports=functionName;

module.exports=removeDuplicates;

/* 

Example-3
 
    var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

    function removeDuplicates(arr) {
      var unique = arr.reduce(function (acc, curr) {
        if (!acc.includes(curr)) acc.push(curr);
        return acc;
      }, []);
      return unique;
    }

    console.log(removeDuplicates(arr)); 
    
    */
