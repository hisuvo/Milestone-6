function appFunc() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => myFunc(data))
}

function myFunc(data) {
    return console.log(data)
}