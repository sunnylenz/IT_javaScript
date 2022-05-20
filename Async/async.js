let stocks = {
    Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
    Liquid: ["Water", "Ice"],
    Holder: ["Cone", "Cup", "Stick"],
    Toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

const time = async ms => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("shop is closed"));
        }
    });
}


const kitchen = async () => {
    try {
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected`);

        await time(0000);
        console.log("Start the Production");

        await time(2000);
        console.log("Cut the Fruits");

        await time(1000);
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`);

        await time(1000);
        console.log("Starting the machine");

        await time(2000);
        console.log(`Ice Cream was placed on a ${stocks.Holder[0]}`);

        await time(3000);
        console.log(`${stocks.Toppings[0]} was selected`);

        await time(2000);
        console.log("Ice Cream is served");
    } catch (error) {
        console.log("Customer Left", error);
    }
    finally {
        console.log("Day ended, shop is closed");
    }
}

kitchen();