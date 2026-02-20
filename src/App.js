class Person {
  constructor() {
    this.name = "abc";
  }
  printName() {
    this.age = 30;
    console.log(this.name);
    console.log(this.age);
  }
}
const p1 = new Person();
p1.printName();
