// Your code here


class Cat {
constructor (name,sex) {

  this.name= name;
  this.sex= sex;
}
speak() {
  return  `${this.name} says meow!`
}
}

let animal = new Cat('ddd')

class Dog {
  constructor (name,sex) {

    this.name= name;
    this.sex= sex;
  }
speak(){
  return `${this.name} says woof!`
}
}
let newdog = new Dog('asdasd')

class Bird {
  constructor (name,sex) {

    this.name= name;
    this.sex= sex;
  }
  speak(){ if(this.sex==='male'){
    return `It's me! ${this.name}, the parrot!`}else{
      return `${this.name} says squawk!`
    }

  }
}
let newbird = new Bird('Mable')
