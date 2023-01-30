class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

class SportsCar extends Car {
  constructor(make, model, year, topSpeed) {
    super(make, model, year);
    this.topSpeed = topSpeed;
  }

  getDescription() {
    return `${super.getDescription()} with a top speed of ${this.topSpeed} mph`;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }

  getDescription() {
    return `${super.getDescription()} with a range of ${this.range} miles`;
  }
}

function printCarDetails(car) {
  console.log(car.getDescription());
}

const tesla = new ElectricCar("Tesla", "Model S", 2021, 300);
const porsche = new SportsCar("Porsche", "911 GT3", 2021, 190);

printCarDetails(tesla);
printCarDetails(porsche);
