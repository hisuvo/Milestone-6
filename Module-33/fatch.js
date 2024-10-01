
function getFunc() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data => display(data))
}

function display(data) {
    console.log(data)
}

