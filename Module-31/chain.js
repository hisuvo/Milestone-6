
const data = [
    {
        id: "5344",
        name: "Broun",
        address: {
            village: "Shantinogur",
            homeDistic: "Hogli",
            city: "kalkata",
        }
    },

    {
        id: "4390",
        name: "Aroun",
        address: {
            village: "Batna",
            homeDistic: "RanaGut",
            city: "kalkata",
        }
    },

    {
        id: "5344",
        name: "Troun",
        // address: {
        //     homeDistic: "Nodia",
        //     city: "kalkata",
        // }
    }
]

// for(let item of data) {
//     console.log(item.address.homeDistic);
//     console.log("------------")
//     console.log(item.address.city)
//     console.log("------------")
// }



//Optional ? symbool
console.log(data[0].address.village)
console.log(data[1].address.village)
console.log(data[2].address?.village)
