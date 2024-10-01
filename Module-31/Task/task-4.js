
const people = [
    {name: "Meena", age: 20},
    {name: "Rina", age: 15},
    {name: "Suchorita", age: 22}
]

let sum = 0

for(let i = 0; i < people.length; i++) {
    let singleAge = people[i].age;
    sum += singleAge;
    let x = 500
}

console.log(sum)


// Reduce methos
const total = people.reduce((acc, cur) => acc + cur.age, 0);

console.log(total);

const totalAge = people.reduce(function (acc, cur) {
    return acc + cur.age;
}, 0)

console.log(totalAge)