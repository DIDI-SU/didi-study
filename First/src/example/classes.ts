abstract class Department {
  //private을 이용해서 다른 사람들이 외부에서 변경을 하지 못하도록함
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  abstract makeDepartment(this: Department): void;

  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class IT extends Department {
  constructor(id: string, public admin: string[], private reports: string[]) {
    super(id, "IT");
    this.admin = admin;
  }
  makeDepartment() {
    console.log("it" + this.id);
  }

  addRepots(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  makeDepartment() {
    console.log("Accounting" + this.id);
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("no report");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("please pass in a valid value");
    }
    this.addRepots(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addRepots(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("max");

const accounting = new AccountingDepartment("1", []);
accounting.mostRecentReport = "";
console.log(accounting.addRepots("something wrong"));
console.log(accounting.mostRecentReport);

const its = new IT("2", ["Max", "Kim"], ["js", "ts"]);
console.log(accounting);

// accounting.makeDepartment();

const accountingCopy = {
  name: "default",
  makeDepartment: accounting.makeDepartment,
};

its.addEmployee("Max");
its.addEmployee("Manu");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.printEmployeeInfo();
console.log(its);
console.log(accounting);

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
// class Product {
//   private isListed: boolean;

//   constructor(title: string, price: number) {
//     this.isListed = true;
//   }
// }
