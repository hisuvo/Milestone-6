
const instructor = [
    {name: "Nodi", age: 28, position: "senior"},
    {name: "Akil", age: 26, position: "Junior"},
    {name: "Shobuj", age: 30, position: "senior"}
]


instructor.filter(function (n) {
    if(n.position === "senior") {
        console.log(n.name)
    }
})

instructor.filter( (n) => {
    if(n.position === "senior") {
        console.log("Name:", n.name + " and Age:" + n.age)
    }
})