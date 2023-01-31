class School {
  //   constructor(name, location, course, duration) {
  //     this.name = name;
  //     this.location = location;
  //     this.course = course;
  //     this.duration = duration;
  //   }
  //   read(name, location, course, duration) {
  //     this.name = name;
  //     this.location = location;
  //     this.course = course;
  //     this.duration = duration;
  //   }
  userinput() {
    const prompt = require("prompt-sync")();
    this.nam = prompt("Enter School Name: ");
    this.loc = prompt("Enter Location of School: ");
    this.cours = prompt("Enter courses offered: ");
    this.duration = prompt("Course duration: ");
    console.log("----------------");
  }
  display() {
    console.log("----------------");
    console.log(this.name);
    console.log(this.location);
    console.log(this.course);
    console.log(this.duration);
  }
  display2() {
    console.log(this.nam);
  }
}
// m = new School();
// m.read("MG GANDHI INTERNATIONAL ", "Mumbai", "computer Engineering", 5);
// m.display();
// c = new School();
// c = new School();
// c.userinput();
var arr = []; // Create empty array
// arr.push(c);
// c.userinput();
// arr.push(c);
// c.display2();
// console.log(c);
// console.log(arr);
//this refers to the object which is calling the method
// which is on the left of dot...
for (let i = 0; i <= 1; i++) {
  var d = d + i;
  d = new School();
  d.userinput();
  arr.push(d);
}
console.log(arr);
