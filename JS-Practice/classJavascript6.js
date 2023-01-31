//this refers to this object to the left of dot
class Vehicle {
  constructor(price) {
    this.price = price;
  }
  details(nam, ModelNo, color, location) {
    this.nam = nam;
    this.ModelNo = ModelNo;
    this.color = color;
    this.location = location;
  }
  display() {
    console.log(this.nam);
    console.log(this.ModelNo);
    console.log(this.price);
    console.log(this.color);
    console.log(this.location);
    console.log("-----------------------");
  }
}
let car = new Vehicle(2500000);
car.details("BMW", "200xd", "Black", "Pune");
car.display();
let bike = new Vehicle(10000);
bike.details("BULLET", "KOOK", "Black", "UP");
bike.display();
