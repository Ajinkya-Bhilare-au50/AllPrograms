// parent class animal
class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  eat() {
    return `${this.name} is eating!`;
  }

  sleep() {
    return `${this.name} is going to sleep!`;
  }

  wakeUp() {
    return `${this.name} is waking up!`;
  }
}
//sub class gorilla

class Gorilla extends Animal {
  constructor(name, weight) {
    super(name, weight);
  }

  climbTrees() {
    return `${this.name} is climbing trees!`;
  }

  poundChest() {
    return `${this.name} is pounding its chest!`;
  }

  showVigour() {
    return `${super.eat()} ${this.poundChest()}`;
  }

  dailyRoutine() {
    return `${super.wakeUp()} ${this.poundChest()} ${super.eat()} ${super.sleep()}`;
  }
}

function display(content) {
  console.log(content);
}

const gorilla = new Gorilla("George", "160Kg");
display(gorilla.poundChest());
display(gorilla.sleep());
display(gorilla.showVigour());
display(gorilla.dailyRoutine());

// OUTPUT:
// George is pounding its chest!
// George is going to sleep!
// George is eating! George is pounding its chest!
// George is waking up! George is pounding its chest! George is eating! G
/*
The above code has 2 JavaScript classes namely Animal and Gorilla.
The Gorilla class is a subclass or child class of Animal and it uses the extends keyword to set itself as a subclass.
However, the super keyword has been used in two different ways.
Did you guys notice the same? In Gorilla’s constructor (line 23 of code)
super is used as a “function”. Whereas, Gorilla’s showVigour() (line 35) and dailyRoutine()(line 39) methods have used super as an “object”.
The super keyword is used in two ways because of the following reasons:
In line 24, the super keyword is used as a “function” which calls the
parent class Animal with the parameters passed to Gorilla. 
This is a key step to be carried out in order to make sure that
Gorilla is an instance of Animal.
In line 36 and 40 super is used as an “object” which
refers to an Animal instance (parent class). The super keyword 
here is used to call the methods of the parent class Animal explicitly.
People familiar with languages like C#, Java, Python can pretty
much relate to how all this works. However, JavaScript was not so simple before ES6 came in, especially for classes. So how did people code without using class syntax, super and extends keywords? Or they never used such concepts before and suddenly decided to add them? Let’s find out!
*/
