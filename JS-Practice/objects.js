// const person ={
//     name: "Johnny",
//     Age:45,
//     lastName:'Pandit',
//     Qualification:' Software Engineer',
//     siblings:['anna',"tailor","Preeti"],
//     fullName : function() {
//         console.log('this is fullname '+ this.Qualification);
//     }

// };
// console.log(person.name);
// person.fullName();

var College = {
  name: "Kj Somaiya",
  Location: "Mumbai",
  Area: "1000 Acres",
  Students: 1000,
  staff: ["Principal", "supervisor", "Head of Department"],
  greetings: function () {            //we can write greeting(){} as function it will work
    console.log("Welcome Everyone");
  },
};
console.log(College.Location);
console.log(College.Area);
College.greetings();
//JavaScript is case sensitive.