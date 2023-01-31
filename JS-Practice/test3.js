let ones = 0;
let flips = 0;
for (let i = 0; i < s.length; i++) {
  if (s.charAt(i) == "0") flips = Math.min(flips + 1, ones);
  else ones++;
}
return flips;
// 
  let result = [];
//   let set = new Set();
  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);
  }
  for (let j = 0; j < B.length; j++) {
    if (set.has(B[j])) {
      ans.push(B[j]);
      set.delete(B[j]);
    }
  }
  return ans;

//   ---------------------------
   //Enter your code here
    let arr = input.split('\n');
    console.log(arr)
  n1=arr[0];

    A=[...arr[1]];n2=arr[1];
    B=[...arr[2]];
    A = A.filter(entry => entry.trim() != '');
     B = B.filter(entry => entry.trim() != '');
   console.log(A);
      B=B.map(Number);
console.log(B);
    
//
var keys = ["foo", "bar", "baz"];
var values = [11, 22, 33];

// var result = {};
keys.forEach((key, i) => (result[key] = values[i]));
console.log(result);



// fsgds
    let set = new Set();
    for (let i = 0; i < A.length; i++) {
      set.add(A[i]);
    }
    for (let j = 0; j < B.length; j++) {
      if (set.has(B[j])) {
        ans.push(B[j]);
        set.delete(B[j]);
      }
    }
    // console.log(ans);
    C = A.filter((a) => !ans.includes(a));
    // console.log(C);
    D = B.filter((a) => !ans.includes(a));
    // console.log(D);
    // output=[...C,"\n",...D]

    C = [...new Set(C)];
    D = [...new Set(D)];
    output1 = `${C.join(" ")}\n${D.join(" ")}`;
    console.log(output1);
return output1;
    

