function processData(input) {
  //Enter your code here
  // A is base
  //B is first array
  // C is second array
    A = []; B = []; ans = []; C = []; D = []; output = [];
  //console.log(input);
  let len = input[0].split("\n").map(Number).join("").toString();
  A = input.split("\n");
  B = A[1].split(" ", len).map(Number);
  C = A[2].split(" ", len).map(Number);
  console.log("Length"+len);
  console.log("array A"+A);
  console.log("array B" + B);
  console.log("array C"+C);

  B = B.sort((a, b) => a - b);
  C = C.sort((a, b) => a - b);
  let temp1 = [];
  let temp2 = [];

  B.forEach((item) => {
    if (!C.includes(item)) temp1.push(item);
  });

  C.forEach((item) => {
    if (!B.includes(item)) temp2.push(item);
  });

  E = [...new Set(temp1)];
  F = [...new Set(temp2)];
  E = E.sort((a, b) => a - b); //C is second array
  F = F.sort((a, b) => a - b);

  console.log(E.join(" ").toString());
  console.log(F.join(" ").toString());
  // return output1;
}
