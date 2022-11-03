function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}

function multiply(a, b) {
  return a * b;
}

function square(a) {
  return a * a;
}

function cube(a) {
  return a * a * a;
}

// module.exports = cube;
// module.exports = subtract;
// module.exports = multiply;
// module.exports = square;

module.exports = { add, subtract, cube, square, multiply };
//to export multiple functions using single Exports keyword
