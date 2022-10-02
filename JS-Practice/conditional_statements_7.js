var person1 = {
  first_name: "minakshi",
  last_name: "Sharma",
  born: 1968,
  died: 1933,
  age: 24,
  lovers: ["Jennifer Parker", "Baines McFly"],
  status: "Resident",
};

var person2 = {
  first_name: "Manish",
  last_name: "Mishra",
  born: 1968,
  died: 1933,
  age: 70,
  lovers: ["Jennifer Parker", "Baines McFly"],
  status: "Tourist",
};
if (person1.age >= 18 && person1.status === "Tourist") {
  console.log("you can cast the vote ");
} else {
  console.log("you are not eligible to cast the vote ");
}
