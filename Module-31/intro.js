const person = {
    name: "Robi",
    age: 23,
    country: "Indai",
    job: "Actrose"
}

console.log(person)

// destructur way
const {name, age, country, job} = person

console.log(name, age, country, job)

const student = [{name:"anik", age: 16, address:"shibRamPur"}];
console.log(student[0]["address"])