
const person = {
    name: "XX",
    age: 13,
    study: "primary",
    national: "Bangladesh"
}

// destructure by key 
const {name, age , study, national} = person;

// destructure by key New name using
const {name: garduanName, age :garduanAge, study:garduanstudy, national :garduanNational} = person;


// ARRAY DESTRUCTUREIND SYSTEM

const fruits = ["apple", "orange", "banana", "mango"]
// console.log(fruits[0])

const [apple, orange, banana, mango] = fruits;
// console.log(banana)

const [f1, f2, f3, f4] = fruits;
// console.log(f4)


// teacher information
const {
    name:tecrName,
    id:tecrId,
    subject: tecrSubject,
    salary: tecrSalary,
    age: tecrAge,
    nationality: tecrNationality
} = {
    name:"Jankher Mahamood",
    id: "qr234#",
    subject: "font-end",
    salary: 5500,
    age: 38,
    nationality: "Bangladeshi"
}

// console.log(tecrNationality)