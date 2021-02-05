class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep";
    }
    toString() {
        return `${this.make} ${this.model} ${this.year}`;
    }
}

class Car extends Vehicle {
    numWheels = 4;
    super();
}

class Motorcycle extends Vehicle {
    numWheels = 2;
    revEngine() {
        return "VROOM!";
    }
    super();
}

class Garage {
    cunstructor(capacity) {
        this.capacity = capacity;
    }
    vehicles = [];
    add(V) {
        if (V !== Vehicle) {
            return Error("Only vehicles are allowed in here!");
        }
        if (this.capacity == vehicles.length()) {
            return Error("Sorry we're full");
        }
        this.vehicles.push(V);
    };
}