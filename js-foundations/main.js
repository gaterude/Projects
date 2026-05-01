class Car {
  constructor() {this.fuel = 0;

  }

  drive() {
    console.log("This car has a driver");
  }

  addFuel(amount) {
    this.fuel += amount;
    console.log("Fuel added: " + amount);
  }
}

const benz= new Car();
benz.addFuel(10);
benz.drive();

console.log("Current fuel: " + benz.fuel);

