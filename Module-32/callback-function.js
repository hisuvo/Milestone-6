/**
 * When a function pass as a argument of another function this function say callback function
 * 
 */



function myInformation(myFatherInfor) {
    return myFatherInfor();
}

function myFatherInfor() {
    return ` My father name is Binod Datta. `
}


let iformation = myInformation(myFatherInfor);

console.log(iformation)



