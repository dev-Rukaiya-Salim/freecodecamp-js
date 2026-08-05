// The new keyword
 
 class Vehicle {
	constructor(brand, year) {
		this.brand = brand;
		this.year = year;
	}
	sayHello() {
		console.log(`${this.brand} is the car's brand and ${this.year} is its year of manufacture`);
	}
}

const myCar = new Vehicle("Toyota", 2019);
console.log(myCar.brand);
myCar.sayHello();
console.log(myCar);

// Parent class
// Child class

class Animal {
	constructor(color, age) {
		this.color = color;
		this.age = age;
	}

	greet() {
		console.log(`Hii there, ${this.color} is the animals color.`);
	}
} 

class Dog extends Animal {
	constructor(color, age, gene) {
		super(color, age)
		this.gene = gene;
	}
}

const dog = new Dog("brown", 3, "chiwawa");
console.log(dog);
dog.greet();
console.log(dog.gene);
