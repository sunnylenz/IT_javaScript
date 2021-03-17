class Human {
    gender = 'male';
    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Max'
    gender = 'Female '

    printMyName = () => {
        console.log(this.name, this.gender);
    }
}
const person = new Person();
person.printGender();
person.printMyName();