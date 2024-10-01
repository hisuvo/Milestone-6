/**
 * function parameter check kirar jonno 
 * functionName.length; 
 *
 */


function sum(num1, num2, num3) {

    console.dir(arguments);  // array like object

    // create array
    // let x = Array.from(arguments); 
    // let y = [...arguments]

    console.log("Total value is: ", num1 + num2 + num3);
}

sum(12, 23, 34, 45, 56, 67, 78, 56, 90);

