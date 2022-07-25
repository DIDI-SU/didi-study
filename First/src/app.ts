class Department {
  //private을 이용해서 다른 사람들이 외부에서 변경을 하지 못하도록함
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}
  makeDepartment(this: Department) {
    console.log(`Department(${this.id}) : ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("1", "Accounting");
console.log(accounting);

accounting.makeDepartment();

// const accountingCopy = {
//   name: "default",
//   makeDepartment: accounting.makeDepartment,
// };
// accountingCopy.makeDepartment();
accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printEmployeeInfo();

// //절대 변경x readonly :오직 ts 에서만
// class Department {
//   //클래스 필드를 이용해서 클래스를 만들어준 모습입니다
//   name: string;
//   //생성자 함수를 이용해 주어 초기화 해 주어야합니다
//   constructor(n: string) {
//     this.name = n;
//   }
//   makeDepartment(this: Department) {
//     console.log(`Department : ${this.name}`);
//   }
// }

// const accounting = new Department("Accounting");

// const accountingCopy = { makeDepartment: accounting.makeDepartment };
// console.dir(accountingCopy);

// accountingCopy.makeDepartment();
// class Department {
//   //private을 이용해서 다른 사람들이 외부에서 변경을 하지 못하도록함

//   private employees: string[] = [];

//   constructor(private id: string, public name: string) {}
//   makeDepartment(this: Department) {
//     console.log(`Department${this.id} : ${this.name}`);
//   }
//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }
// }

// const accounting = new Department("1", "Accounting");

// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");
// console.log(accounting);
class Product {
  private isListed: boolean;

  constructor(title: string, price: number) {
    this.isListed = true;
  }
}
