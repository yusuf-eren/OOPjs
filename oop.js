// let student = {
//     id:101,
//     firstname:'Yusuf',
//     lastname: 'Eren',
//     introduce(){
//         console.log("Merhaba ben "+ this.firstname + ' ' + this.lastname);
//     }
// }

// student.introduce()

// class ClassName {
//     constructor(){
//         this.propA = valueA;
//         this.propB = valueB;
//     }
// }

// let instance = new ClassName();
// console.log(instance)

// class Student {
//   constructor(id, fn, ln) {
//     this.id = id;
//     this.firstname = fn;
//     this.lastname = ln;
//   }
//   introduce(){
//     console.log(this.firstname,this.lastname)
//   }
// }

// let student = new Student(2, "Yusuf", "EREN");
// student.introduce()

class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}

let x = new Professor("Yusuf", "Maths");

x.grade(5);
console.log(x);

class Student extends Person {
  // private data property
  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}

const stud = new Student("Ali", 1);
console.log(stud);
stud.introduceSelf();
console.log(stud.canStudyArchery());

class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log("You called me?");
  }
}

const myExample = new Example();

myExample.somePublicMethod();

// myExample.#somePrivateMethod(); // Error
