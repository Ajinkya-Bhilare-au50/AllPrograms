class Vehicle {
  constructor(price) {
    this.price = price;
  }
  details(modelno, make) {
    this.modelno = modelno;
    this.make = make;
  }
  display() {
    console.log("Price of the bike is " + this.price);
    console.log("Model number of bike is " + this.modelno);
    console.log("It was first launched in " + this.make);
  }
}

class bike extends Vehicle {
  constructor() {
    console.log("welcome to our showroom");
    super(20000);
  }
}

m1 = new bike();
m1.details("2451782OPLK", 2015);
m1.display();
