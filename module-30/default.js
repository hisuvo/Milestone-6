
// Ganareal function
function count(num1, num2) {
    const number = num1 + num2;
    // const number = 23 + undefined;
    return number;
    // return NaN
}


// Default number 
function myNumber(num1 = 23, num2= 24) {
    const number = num1 + num2;
    return number;
}

myNumber(45, 55)


// If I want use default string then

function myString(fullName = ''){
    let name = `Our Faverite person is ${fullName}`;
    return name
}

myString("bagershore dhame sarker")


// Default array
function myArray(fruites = []) {
    return fruites;
}

myArray()


// Default object
function myObject(person = {}) {
    return person
}

console.log(myObject())
