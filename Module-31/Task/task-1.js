const numbers = [1, 3, 5, 7, 9]; // odd numbers

//By using for loop
const evenNumbers1 = []
for(let i = 0; i < numbers.length; i++) {
    let num = numbers[i] + 1;
    evenNumbers1.push(num)
}
console.log(evenNumbers1)

//By using for--of loop
const evenNumbers2 = [];
for(let number of numbers) {
    evenNumbers2.push(number + 1)
}
console.log(evenNumbers2)



// By using Array.map() method

let evenNumbers3 = numbers.map(function (num) {
    return num + 1;
})

console.log(evenNumbers3)

let evenNumbers4 = numbers.map(num => num + 1);
console.log(evenNumbers4)