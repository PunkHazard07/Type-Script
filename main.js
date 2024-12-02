// Implement the Car class that adheres to the Vehicle interface
var Car = /** @class */ (function () {
    // Constructor to initialize the make, model, and year
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implement the start method
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
var myCar = new Car("Toyota", "Corolla", 2022);
console.log("Make: ".concat(myCar.make, ", Model: ").concat(myCar.model, ", Year: ").concat(myCar.year));
myCar.start();
var anotherCar = new Car("Ford", "Mustang", 2024);
console.log("Make: ".concat(anotherCar.make));
console.log("Model: ".concat(anotherCar.model));
console.log("Year: ".concat(anotherCar.year));
anotherCar.start();
