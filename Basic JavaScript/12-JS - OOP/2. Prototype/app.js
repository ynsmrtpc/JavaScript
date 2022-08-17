// const object = new Object(); // Object Literal
// object.name = "Yunus";
// console.log(object)

// function Employee(name, age) {
//     this.name = name;
//     this.age = age;
//     this.showInfos = function() {
//         console.log("Bilgiler Gösteriliyor...");
//     }
// }

// const emp1 = new Employee("Yunus", 23);
// console.log(emp1);

// console.log(emp1.toString());


// DERS 2 

function Employee(name, age) {
    this.name = name;
    this.age = age;
}

Employee.prototype.showInfos = function() {
    console.log("İsim: " + this.name + "\nYaş: " + this.age);
}

const emp1 = new Employee("Yunus", 23);
const emp2 = new Employee("Emre", 24);

// console.log(emp1);
// console.log(emp2);

emp1.showInfos();
emp2.showInfos();