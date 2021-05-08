/// window metthods/objects/properties

//Prompt / Alert
const input = prompt();
alert(input);

//Confirm
if (confirm('Are you sure')) {
    console.log('Yes');
} else {
    console.log('No');
}

let val;
//outer height and width
val = window.outerHeight;

val = window.innerHeight;

val = window.outerWidth;
val = window.innerWidth;


// Scroll Point
val = window.scrollY;
val = window.scrollX;


//location objects

val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;


//Redirect

window.location.href = 'http://google.com';

//Reload

window.location.reload();
console.log(val);

//HISTORY OBJECT
window.history.go(); // acepts a value
val = window.history.length;

// Navigator Object

val = window.navigator;
window.navigator.appName;
window.navigator.appVersion;
window.navigator.userAgent;
window.navigator.platform;
window.navigator.vendor;