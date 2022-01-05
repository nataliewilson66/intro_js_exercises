function Cat(name, owner) {
    this.name = name;
    this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
    return `${this.owner} loves ${this.name}`;
};

let gigi = new Cat("Gigi", "Francesca");
let rubis = new Cat("Rubis", "Drew");
let minnie = new Cat("Minnie", "Sam");
let callie = new Cat("Callie", "Hannah");

console.log(gigi.cuteStatement());
console.log(rubis.cuteStatement());
console.log(minnie.cuteStatement());
console.log(callie.cuteStatement());

Cat.prototype.cuteStatement = function () {
    return `Everybody loves ${this.name}!`;
}

console.log(gigi.cuteStatement());
console.log(rubis.cuteStatement());
console.log(minnie.cuteStatement());
console.log(callie.cuteStatement());

Cat.prototype.meow = function () {
    return `${this.name} says meow!`;
}

console.log(gigi.meow());
console.log(rubis.meow());
console.log(minnie.meow());
console.log(callie.meow());

gigi.meow = function () {
    return `meow meow meow from ${this.name}`;
}

console.log(gigi.meow());
console.log(rubis.meow());
console.log(minnie.meow());
console.log(callie.meow());