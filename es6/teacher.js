import Human from ". / human ";

export function promote() {}

// whenever we have a constructor in a child class, we need to call the constructor of the  parent class
export default class Teacher extends Human {
    constructor(name, degree) {
        super(name); //references the parent class
        this.degree = degree;
    }
    teach() {
        console.log("teaching...");
    }
}