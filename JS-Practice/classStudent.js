class student {
  constructor(fullname, age, height, weight, sports) {
    this.fullname = fullname;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.sports = sports;
  }
  show() {
    console.log(`my name is ${this.fullname}`);
    console.log(`my age is ${this.age}`);
    console.log(`my height is ${this.height}`);
    console.log(`my weight is ${this.weight}`);
    console.log(`my favourite sports is ${this.sports}`);
    console.log("---------------------------------");
  }
}

let shveta = new student("Shveta Singh", 22, 5.1, 50, "Badminton");
shveta.show();
let ajinkya = new student("Ajinkya Bhilare", 28, 5.2, 60, "Cricket");
ajinkya.show();
let priyanka = new student("Priyanka Yadav", 24, 5.3, 80, "Goti");


