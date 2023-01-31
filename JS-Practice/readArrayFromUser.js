function createArray() {
  let a = Number(
    require("prompt-sync")()("Enter the number of Elements inarray :")
  );

  let arr = [];

  for (i = 0; i < a; i++) {
    let num = Number(
      require("prompt-sync")()("Enter the Element " + i + 1 + " of array :")
    );

    arr.push(num);
  }

  return arr;
}

console.log(createArray());
