//Diagonal Difference

function diagonalDifference(arr) {
  let primary = 0;
  let secondary = 0;

  for (let i = 0; i < arr.length; i++) {
    let last_index = arr[i].length - 1;
    primary += arr[i][i];
    secondary += arr[i][last_index - i];
  }

  return Math.abs(primary - secondary);
}
