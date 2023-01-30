class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  function sayHello(person) {
    console.log(person.greet());
  }
  
  const john = new Person('John', 30);
  sayHello(john);
  