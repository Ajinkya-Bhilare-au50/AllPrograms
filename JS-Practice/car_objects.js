var car = {
  make: 2010,
  model: "Qw23xd",
  year: 2022,
  color: ["red", "blue", "green"],
  drive() {
    console.log("I'm driving");
  },
  stop: function () {
    console.log("I'm i need stop my car because of red signal");
  },
};
console.log(car.make);
console.log(car.color[2]);
console.log(car.year);
car.drive();
car.stop();
