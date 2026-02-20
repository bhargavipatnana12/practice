class Human {
  constructor() {
    this.age = 30;
  }
  printAge() {
    console.log(this.age);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "sruthi";
  }
  printName() {
    console.log(this.name);
  }
}
const person = new Person();
person.printAge();
person.printName();
