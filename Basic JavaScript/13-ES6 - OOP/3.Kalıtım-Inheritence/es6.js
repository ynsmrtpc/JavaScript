class Person {  // superclass, baseclass 
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showınfos(){
        console.log("İsim:" + this.name + " Yaş:" + this.age);
    }
}

class Employee extends Person{  // derivedclass, subclass, childclass
    constructor(name,age,salary){
        // this.name = name;
        // this.age = age;
        super(name,age);
        // super.showınfos(); bu şekilde kullanabiliriz.
        this.salary = salary;
    }
    showınfos(){
        console.log("İsim:" + this.name + " Yaş:" + this.age + " Maaş:" + this.salary);
    }
    toString(){
        console.log("Employee");
    }
    raiseSalary(amount){
        this.salary += amount;
    }
}

const emp = new Employee("Yunus", 23, 5000);
emp.raiseSalary(500);
console.log(emp);
emp.showınfos();
emp.toString();