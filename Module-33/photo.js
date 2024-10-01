
function photoFunc() {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => photo(data))
}

function photo(data) {
    const image = document.getElementById("img_container");

    for (let item of data) {
        if (item.id > 50) {
            return
        }

        let picture = document.createElement("picture");
        image.classList.add("style")
        const { id, title, url, thumbnailUrl } = item;

        picture.innerHTML = `
                <img src=${thumbnailUrl} alt=${url}>
                <p>${id}</p>
                <h4>${title}</h4>
            `
        image.appendChild(picture);
    }
}


