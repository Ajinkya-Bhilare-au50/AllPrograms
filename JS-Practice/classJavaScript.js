class Animal {
  constructor() {}
  cow(name) {
    console.log("I am cow " + name);
  }
  goat() {
    console.log("I am goat");
  }
  rat() {
    console.log("I am rat");
  }
  dog() {
    console.log("I am dog");
  }
  cat(name) {
    console.log("I am cat-meow meow" + name);
  }
}
let pranav = new Animal(); //pranav is object
pranav.cow("pigi");
pranav.rat();
pranav.cat(" Patel ");
//this keyword refers to the object which is on the
// left of Dot.
