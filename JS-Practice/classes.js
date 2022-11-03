class person {
  constructor(name, age, Qualification) {
    this.name = name;
    this.age = age;
    this.Qualification = Qualification;
    // console.log(this);
  }
  display() {
    return `${this.name}`;
  }
}

joy = new person("john", 45, "B-Tech in Electronics");
console.log(joy.display());

/* function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
}

var quayHotel = new Hotel("Quay", 40, 29);
var parkHotel = new Hotel("Park", 28, 11);
console.log(quayHotel);
 */
