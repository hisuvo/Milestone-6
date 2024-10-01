
function Person (name, age, nationality) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
}

const anupom = new Person ("anupom", 23, "bangladesh");


const student = {
    name : "suvo",
    age : 23,
    country: "bangladesh",
    "present-address": "magura"
}

//and dot notation
// console.log(student.country)

// Bracket Notation 
// console.log(student["present-address"])


const {x, y, z} = {x: 5, b: 6, z: 7};


const num = [1, 2, 5, 4, 5, 6, 7, 8];

console.log(num.find(number => number === 5))
console.log(num.filter(number1 => number1 === 5))


function min(numbers) {
    console.log(Math.min(numbers))
}

min([1, 2, 3])

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);