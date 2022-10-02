/*  
ES6 Classes -Syntactic Sugar
Prototypal Inheritance
*/

class Account {
  constructor(name, initialbalance) {
    this.name = name;
    this.balance = initialbalance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Hello ${this.name},your balance is ${this.balance}`);
  }
}
// when object is created of particular class then constructor is automatically called
// there is no need to call constructor
const john = new Account("John", 0); // john is object of class account
console.log(john);
const poly = new Account("Poly", 4500);
console.log(poly);

