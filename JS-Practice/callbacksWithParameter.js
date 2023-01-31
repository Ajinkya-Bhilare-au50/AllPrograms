//Callback functions with parameters
// imagine you are traveling to your Favourite Destination.
// Method-1
//one function is given the responsibility of calling another functions
function travel(Destination, NecessaryEquipments, ModeOfTransport, Expense) {
  console.log("\nI am traveling to " + Destination);
  things = ["Camera", "Glares", "Clothes"];
  NecessaryEquipments(things);
  ModeOfTransport("Bus", "Train", "Airplane");
  Expense(45000);
}

function NecessaryEquipments(things) {
  console.log("I have taken " + things);
}

function ModeOfTransport(B, T, A) {
  console.log("I will either travel by " + B + " or" + T + " " + "or " + A);
}

function Expense(Money) {
  console.log("i will need " + Money + " Rupees\n");
}

travel("Australia", NecessaryEquipments, ModeOfTransport, Expense);
