
class Veicale {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}

class Car extends Veicale {
    constructor(brand, price, model) {
        super(brand, price)
        this.model = model;
    }
    buy() {
        return `I like and my dream car is ${this.brand}. It price is ${this.price} Tk. and model ${this.model}`
    }
}


const thar = new Car("Mahendra Thar",1400000, "4x4");

console.log(thar.buy())