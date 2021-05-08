// Object.prototype
// Person.prototype

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    //console.log(this);  returns the object
    this.birthday = new Date(dob);
    // this.calculateAge = function() {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// Calculate Age
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get Full name
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Gets married
Person.prototype.getsMarried = function(newLastname) {
    this.lastName = newLastname;
}



const john = new Person('john', 'Sunny', '6-25-95');
const mary = new Person('Mary', 'Joel', '6-25-95');


mary.getsMarried('Madubuike');


console.log(john.calculateAge());
console.log(mary.getFullName());
console.log(mary.hasOwnProperty('firstName')); // object prototype