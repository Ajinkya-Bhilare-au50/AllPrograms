/* 
Property Lookup
If child does not have ask parent
Everthing in JS is object

*/
function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  this.bank = "Bank Of America ";
}
const john8 = new Account("john", 200);
const bob8 = new Account("Bob", 20);
Account.prototype.bank = "Chase";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balnce is ${this.balance}`);
};
console.log(john.bank);
console.log(bob);
console.log({});
console.log([]);
