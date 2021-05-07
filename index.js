// Your code here
class Cat {
  constructor(name){
    this.name=name
  }
  speak() {
          return `${this.name} says meow!`;
      }
}
let cat = new Cat("Sasha", "female");

class Dog {
  constructor(name){
    this.name=name
  }
  speak() {
          return `${this.name} says woof!`;
      }
}
let dog = new Dog("Rufio", "male");

class Bird {
  constructor(name,gender){
    this.name=name;
    this.gender=gender;
  }
    speak(){
      if(this.gender==="male")
      {
        return `It\'s me! ${this.name}, the parrot!`
      }
        else
        {
          return `${this.name} says squawk!`
        }
  }

}
let bird = new Bird("Pablo", "male")
let bird2 = new Bird("Mable", "female")
