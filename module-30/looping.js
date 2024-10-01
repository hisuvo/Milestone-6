/**
 * for--of loop only use for array and string not in object
 * for--in loop only use in object 
 * 
 * Notes:we can use for--of in object using some tachnick
 */


// for of 

const txt = "hello Programmer";
for(let letter of txt) {
    // console.log(letter)
}

const ary = [23, 34, 45, 56, 67, 78, 89, 90];
for(let number of ary) {
    // console.log(number)
}


const mill = {
    morning: "half",
    noon: "full",
    night: "medium"
}

for(let item of Object.keys(mill)) {
    console.log(item, mill[item])
}