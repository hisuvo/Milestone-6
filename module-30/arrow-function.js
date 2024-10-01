
// Regulor function 
function add(num1 = 0, num2 = 0) {
    let number = num1 + num2;
    return number;
}
const regNumber = add(34, 6);

// function expression
const number = function(num1 = 0, num2 = 0) {
    return num1 + num2;
}
const expNuber = number(23, 7);


// Neasting Function 
const neatFunc = ((a, b) => a + b ) (65, 5);


// Arrow function 
const arrowFunc = (a, b) => a + b;
const arowNumber = arrowFunc(2, 3);
console.log(arowNumber)

  