const address = {
    street: '',
    city: '',
    country: ''
};
// es5
const street = address.street;
const city = address.city;
const country = address.country;

// es6

const { street, city, country } = address;

// when accessing only one property

const { street } = address;

// when accessing a property but with another identifier

const { street: str } = address;