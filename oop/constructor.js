//  person constructor

function Person(name, dob) {
    this.name = name;
    //console.log(this);  returns the object
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

//console.log(this); returns the window object

const brad = new Person('Brad', '6-25-1995');
const john = new Person('John');
console.log(brad.calculateAge());