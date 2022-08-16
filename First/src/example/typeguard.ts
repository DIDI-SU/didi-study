type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};
//
//인터섹션타입은 객체의 경우 객체 속성의 조합
type ElevatedEmpployee = Admin & Employee;

const e1: ElevatedEmpployee = {
  name: "Lee",
  privileges: ["create-server"],
  startDate: new Date(),
};

//인터섹션타입은  유니언의 경우 타입간의 공통점이 있는 타입
type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//타입가드
//유니언 을 돕는 타입 가드
//typeof 를 이용한 타입 가드의 예제
function PLUS(a: number, b: number): number;
function PLUS(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnkwonEmployee = Employee | Admin;
//in을 이용해ㅑ서 타입카드
const printEmployeeInfo = (emp: UnkwonEmployee) => {
  console.log(`name : ${emp.name}`);
  if ("privileges" in emp) {
    console.log(`privileges: ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`startDate: ${emp.startDate}`);
  }
};

printEmployeeInfo(e1);

//class에서 instanceof를 이용해 타입 가드하기
class Car {
  drive() {
    console.log("drive");
  }
}

class Truck {
  drive() {
    console.log("truck");
  }
  loardCargo(amount: number) {
    console.log(amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (v: Vehicle) => {
  v.drive();
  if (v instanceof Truck) {
    v.loardCargo(1000);
  }
};

useVehicle(v1);
useVehicle(v2);

//타입가드를 도와주는 구별된 유니언: 타입가드를 쉽게 구현하기 위해 이용됨

interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (a: Animal) => {
  let speed;
  switch (a.type) {
    case "bird":
      speed = a.flyingSpeed;
      break;
    case "horse":
      speed = a.runningSpeed;
      break;
  }
  console.log(`이동속도${speed}`);
};

moveAnimal({ type: "bird", flyingSpeed: 100 });

//형변환
// 타입스크립트가 직접 감지하지 못하는 특정 타입의 값을
//타입스크립트에 알려주는 역할
//const input2 = document.getElementById("userInput") as HTMLInputElement;
//위아래는 같은이야기입니다
//! <- NULL로 반환하지 않을 것이라는 이야기
const input = <HTMLInputElement>document.getElementById("userInput")!;
input.value = "hi there";

interface ErrorContainer {
  //객체가 지녀야하는 모든 속성을 문자열을 지녀야 한다면
  //그리고 값도 문자열임을 알고 있어야하는 경우
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must Start with a capital character",
};

//함수 오버로드
