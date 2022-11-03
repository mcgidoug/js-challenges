class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}

let person1 = new Person("joe", 34);
let person2 = new Person("dan", 35);
let person3 = new Person("jess", 26);
let person4 = new Person("jack", 67);
let person5 = new Person("marie", 26);

console.log(person3);

// expected Person {name: 'jess', age: 26}
