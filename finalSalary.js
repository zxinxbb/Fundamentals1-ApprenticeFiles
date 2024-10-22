function Employee(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    let monthlyBonus = 1000;

    this.calculateFinalSalary = function(){
        let finalSalary = this.baseSalary + this.monthlyBonus
        console.log('Final Salary is: ' + finalSalary)
    }

    this.getEmpDetails = function(){
        console.log('Name: ' + this.name + '...Age: ' + this.age);
    }
}

let emp1 = new Employee('Dan', 39, 1500)
emp1.getEmpDetails()
emp1.calculateFinalSalary()