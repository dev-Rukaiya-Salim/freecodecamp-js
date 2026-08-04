// A constructor is a special method that runs automatically when we create a new object

class Person {
	constructor(name, age) {
		this.name = name;
		this.age =age;
	}
}

/*const person1 = new Person("Austine", 24);
console.log(person1.name);
console.log(person1.age);

const person2 = new Person("Mwanasiti", 22);
console.log(person2.name);
*/

// A method is a function that belongs to an object / class.

class Vehicle {
	constructor(brand, year) {
		this.brand = brand;
		this.year = year;
	}
	sayBrand() {
		console.log(`${this.brand} is the car's brand.`);
}
} 

const car = new Vehicle("Benz", 2024);
car.sayBrand();

const toyota = new Vehicle("Ferrari", 2019);
toyota.sayBrand();


