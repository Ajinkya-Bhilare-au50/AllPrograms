class school {
  constructor(schoolname) {
    this.schoolname = schoolname;
  }
  details(nam, age, standard, classteacher) {
    this.nam = nam;
    this.age = age;
    this.standard = standard;
    this.classteacher = classteacher;
  }
  print() {
    console.log(this.schoolname);
    console.log(this.nam);
    console.log(this.age);
    console.log(this.standard);
    console.log(this.classteacher);
  }
}
//--------------------------------------------------------
class college extends school {
  constructor(clgname) {
    // this.clgname = clgname;
    super(clgname);
  }

  party() {
    console.log("We love to BUNK Lectures");
  }

  movie() {
    console.log("we went for a movie");
  }
}

x = new college("MG GANDHI ");
x.details("Rohan", 40, "9th", "Munni");
x.print();
x.party();
x.movie();
