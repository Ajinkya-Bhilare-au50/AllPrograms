/* 
Prototypal inheritance modal 
javascript uses prototypal inheritance model. that means that every constructor function/class
has a prototype property that is shared by every instance of the constructor/class.
so any  properties and methods or prototype can be accessed by every instance.
prototype property return a object
*/

// constructor with capital name
function Account(name, initialBalance) {
  this.name = name;
  this.initialBalance = initialBalance;
  this.deposit = function (amount) {
    this.balance += amount;
    console.log(`hello ${this.name},your balance is ${this.balance} `);
  };
}
const john = new Account("johnny", 200);
const bob = new Account("johnny", 2000);

console.log(Account.prototype);
Account.prototype.bank = "CHASE";

const nip = new Account("johnny", 1500);
