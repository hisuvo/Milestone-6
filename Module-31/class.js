class Products {
    brnad = "walton";
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    student() {
        return `My name is ${this.name}.I am a ${this.subject} Student`
    }
    mobile (mobile) {
        return `my Phone name is ${mobile}`;
    }
}

const stuName = new Products("suvo", "Math")
console.log(stuName.student());









