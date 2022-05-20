// List of our ingredients

let stocks = {
    Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
    Liquid: ["Water", "Ice"],
    Holder: ["Cone", "Cup", "Stick"],
    Toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;
//let is_shop_open = false;
// order function
let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work())
            }, time)

        } else {
            reject(console.log("Our Shop is closed"))
        }
    });
}

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
    .then(() => {
        return order(0000, () => console.log("Production has started"));
    })
    .then(() => order(2000, () => console.log("The fruit was chopped")))
    .then(() => order(1000, () => console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was selected`)))
    .then(() => order(1000, () => console.log("Machine started")))
    .then(() => order(2000, () => console.log(`Ice cream was placed on a ${stocks.Holder[0]}`)))
    .then(() => order(3000, () => console.log(`${stocks.Toppings[0]} was selected`)))
    .then(() => order(1000, () => console.log("Ice Cream was Served")))
    .catch(() => console.log("Customer left")) // runs when promise has been rejected
    .finally(() => console.log("Day ended, Shop is closed"));   // runs whether or not promise is resolved or rejected