// Iterative or non-recursive solution

const factorial = num => {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

console.log(factorial(4));

// recursive way

const recursiveFactorial = num => {
    if (num === 1) {
        return 1;
    }
    return num * recursiveFactorial(num - 1);
}