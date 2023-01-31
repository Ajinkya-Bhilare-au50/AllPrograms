
//Monthly test 2 
//Ajinkya

class NumMatrix {
  constructor(matrix) {
    this.matrix = matrix;
    console.log(this.matrix);
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[0].length; j++) {
        let sum = 0;
        if (j > 0) sum += this.matrix[i][j - 1];
        if (i > 0) sum += this.matrix[i - 1][j];
        sum += this.matrix[i][j];
        if (i > 0 && j > 0) sum -= matrix[i - 1][j - 1];
        this.matrix[i][j] = sum;
      }
    }
  }

  sumRegion(row1, col1, row2, col2) {
    let sum = this.matrix[row2][col2];
    if (col1 > 0) sum -= this.matrix[row2][col1 - 1];
    if (row1 > 0) sum -= this.matrix[row1 - 1][col2];
    if (row1 > 0 && col1 > 0) sum += this.matrix[row1 - 1][col1 - 1];

    return sum;
  }
}
// var matrix = [
//   [3, 0, 1, 4, 2],
//   [5, 6, 3, 2, 1],
//   [1, 2, 0, 1, 5],
//   [4, 1, 0, 1, 7],
//   [1, 0, 3, 0, 5],
// ];
// given matrix in question
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let classmate = new NumMatrix(matrix);
var d = classmate.sumRegion(0, 0, 2, 2); // your input should be here
var p = classmate.sumRegion(0, 0, 1, 2); // your input should be here
console.log(JSON.stringify(classmate));
console.log("The prefix Sum Matrix is :" + d); // your output
console.log("The prefix Sum Matrix is :" + p); // your output
