class Dhoni {
    //constructor is a method which is automatically called
    constructor(arr) {
      
    this.arr = arr;
  }
  nikaal() {
    this.arr.pop();
  }

  daal(element) {
    this.arr.push(element);
  }

  dekh() {
    console.log(this.arr[arr.length - 1]);
  }
}
// arr = ["maths", "Physics", "Comics", "Computer", "Money"];
arr = [];
let sakshi = new Dhoni(arr);
// sakshi.nikaal();
// sakshi.nikaal();
sakshi.daal("raincoat");
sakshi.daal("umbrella");
sakshi.nikaal();
console.log(arr);
sakshi.dekh();
