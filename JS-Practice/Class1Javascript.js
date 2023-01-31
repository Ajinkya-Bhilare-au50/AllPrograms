class shape {
  rectangle(length, breadth) {
    this.length = length;
    this.breadth = breadth;
    let area = length * breadth;
    let perimeter = 2 * (length + breadth);
    console.log("Area of rectangle is " + area);
    console.log("perimeter of rectangle is " + perimeter);
    console.log();
  }
  square(side) {
    this.side = side;
    let area = side * side;
    let perimeter = 4 * side;
    console.log("Area of Square is " + area);
    console.log("perimeter of square is " + perimeter);
    console.log();
  }
  circle(radius) {
    this.radius = radius;
    let area = 3.14 * radius * radius;
    console.log("Area of circle is " + area);
    console.log();
  }
  triangle(base, height) {
    this.base = base;
    this.height = height;
    let area = 0.5 * base * height;
    console.log("Area of triangle is " + area);
    console.log();
  }
}
let Tanya = new shape(); // creating an object
Tanya.rectangle(4, 5);
Tanya.square(8);
Tanya.circle(7);
Tanya.triangle(15, 6);
console.log(Tanya);
// Tanya.rectangle(10, 5); //call
// let Tanuj = new shape();
// Tanuj.square(8);
// let Lavi = new shape();
// // Lavi.circle(45);
// Lavi.square(5);

// this refers to the object to the left of dot
