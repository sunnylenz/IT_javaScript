const colors = ['red', 'green', 'blue'];

//  es5
const items = colors.map(function(color) {
    return '<li>' + color + '</li>';
});

// es6
const items = colors.map(color => `<li>${color}</li>`);

console.log(colors);