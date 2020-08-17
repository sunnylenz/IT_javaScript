function hello(name) {
  if (name == '') {
    return "Hello World";

  } else {
    let upper = name[0].toUpperCase();
    let greeting = name.slice(1, name.length);
    let str = greeting.toLowerCase();
    let result = upper + str;
    // let pos = str.split(" ");
    // let txt = pos[0].toUpperCase();
    return result;
  }
}

hello('sunny is here');