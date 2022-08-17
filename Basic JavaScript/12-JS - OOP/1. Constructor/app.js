//  Constructor - Yapıcı Fonksiyon

function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.showInfos = function() {
        console.log(this.name, this.age, this.salary);
    }
}

const date = new Date();
const emp1 = new Employee("Yunus", 23, 5000);
const emp2 = new Employee("Miraç", 22, 4999);

// var array = new Array()
// array.push(emp1);
// array.push(emp2);
// console.log(array);  

emp1.showInfos();
emp2.showInfos();

//console.log(emp1);
//console.log(emp2);