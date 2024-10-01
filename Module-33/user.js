function userFunc() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => display(data))
}

function display(data) {
    const user_info = document.getElementById("user_info")
    data.map((item) => {
        const { id, name, username, email, phone, website } = item
        let div = document.createElement("div");
        div.classList.add("style")
        div.innerHTML = `
                <p>User id : ${id} </p>
                <h2> ${username} </h2>
                <h3> ${username} </h3>
                <p> ${email} </p>
                <p> ${phone} </p>
                <address> ${website} </address>
            `
        user_info.appendChild(div)
    })
}