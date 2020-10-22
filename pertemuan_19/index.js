console.log("javaScript Class & OOP");

//Class & Constructor
const Person = {
    firstName : "Andre",
    lastName : "Gunawan",
    displayFullName : function () {
        console.log(`${this.firstname} ${this.lastName}`);
    },
};

Person.displayFullName();

class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayFullName () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person1 = new Person ("Andre", "Gunawan");
console.log(person1);
person1.displayFullName();
const person2 = new Person ("john", "Doe");
person2.displayFullName();

//Inheritance "pewarisan"
class Student extends Person {
    constructor (firstName, lastName, NIM, age) {
        super(firstName, lastName);
        this.NIM = NIM;
        this.age = age;
    }
    //static member
    static sayHello() {
        console.log(`Hello World`);
    }
    displayNIM(){
        console.log(`Your NIM is ${this.NIM}`);
    }
    //Setter and Getter
    set studentScore() {
        this.score = score;
    }
    get studentScore() {
        return this.score;
    }
}

const john = new Student ("john", "Doe", "112233", 21);
john.displayFullName();
john.displayNIM();
Student.sayHello();

john.studentScore = 90;
console.log(john.studentScore);