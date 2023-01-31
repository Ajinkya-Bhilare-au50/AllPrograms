var input = "";

function cacheInput(data) {
  input += data;
}

function prepareInput() {
  input = input.split(/\s+/).map(Number);
}

function main() {
  prepareInput();
  var T = input.splice(0, 1)[0];
  for (var i = 0; i < T; ++i) {
    var A = input.splice(0, 1)[0];
    var B = input.splice(0, 1)[0];
    process.stdout.write(A + B + "\n");
  }
  process.exit();
}
// ///////////////////////
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));
  console.log(arr.reverse().join(" "));
}