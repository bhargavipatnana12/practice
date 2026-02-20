class human {
  age = 50;
  printAge = () => {
    console.log(this.age);
  };
}
class person extends human {
  name = "sruthi";
  age = 90;
  printName = () => {
    console.log(this.name);
  };
}
const p = new person();
p.printAge();
p.printName();
