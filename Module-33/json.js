const person = {
    name: "xxx",
    age: 89,
    country: "Bangladesh",
    contact: {
        phone: 1944837009,
        email: "xxx@gamil.com",

    },
    hobby: ["codding", "eat", "sleep", "watch movie", "batminton play"]
}

const personJson = JSON.stringify(person);
const personObj = JSON.parse(personJson);

// Object
console.log(person);

// Convert Json from Object
console.log(personJson);

// Convert Object from Json
console.log(personObj);
