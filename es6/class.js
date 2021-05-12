class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

//static objects is sthe one you can use without instanciating the object

const mary = new Person('Marry', 'Williams', '6-25-95');
mary.getsMarried('Madubuike');
const age = mary.calculateAge('6-25-95');
console.log(Person.addNumbers(3, 4));
console.log(mary, age);