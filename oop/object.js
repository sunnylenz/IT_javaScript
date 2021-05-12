const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstname} ${this.lastname}`;
    },
    getsMarried: function(newLastname) {
        this.lastname = newLastname;
    }
}

const mary = Object.create(personPrototypes);
mary.firstname = 'Mary';
mary.lastname = 'Lenz';
mary.age = 20;
mary.getsMarried('Philip');
console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
    firstname: { value: 'Brad' },
    lastname: { value: 'Lenz' },
    age: { value: 30 }
});
console.log(brad.greeting());
console.log(mary);