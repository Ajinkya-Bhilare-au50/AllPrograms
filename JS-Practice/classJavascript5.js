class Love {
  constructor(date) {
    this.date = date;
    console.log(this.date);
  }
  meet() {
    console.log("Online on Whatsapp");
  }
  prapose() {
    console.log("patanai");
  }

  hug() {
    console.log("virtual");
  }

  finger_ring() {
    console.log("Pending");
  }

  marriage() {
    console.log("Not yet planned");
  }
}
let m = new Love(); //m is object
m.meet();
m.prapose();
m.hug();
m.finger_ring();
m.marriage();
