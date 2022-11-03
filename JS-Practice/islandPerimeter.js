//leetcode-463 problem
var islandPerimeter = function (grid) {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        perimeter = checkParam(grid, i, j, perimeter);
      }
    }
  }
  return perimeter;
};

var checkParam = function (grid, r, c, perimeter) {
  //  console.log(grid, r,c)
  if (r == 0) {
    perimeter++;
  }

  if (r == grid.length - 1) perimeter++;
  if (c == 0) perimeter++;
  if (c == grid[0].length - 1) perimeter++;
  if (r > 0 && grid[r - 1][c] == 0) perimeter++;
  if (r <= grid.length - 2 && grid[r + 1][c] == 0) perimeter++;
  if (c > 0 && grid[r][c - 1] == 0) perimeter++;
  if (c < grid[0].length && grid[r][c + 1] == 0) perimeter++;
  return perimeter;
};
