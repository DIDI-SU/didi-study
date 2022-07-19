// object
// 객체 자체에 몇개의 키-벨류 그리고, 각 키에 대한 타입을 명시 할 수 있습니다
// const person: { name: string; age: number } = {
//   name: "Lee",
//   age: 26,
// };

// const person = {
//   name: "Lee",
//   age: 26,

// };
// console.log(person);

//array
// const person = {
//   name: "Lee",
//   age: 26,
//   hobbies: ["Sports", "Cooking"],
// };
//문자열 배열
let favAct: string[];
favAct = ["Sports"];
//뭐든지 가능한 배열
let favActAny: any[];
favActAny = ["Sports", 2];
//이를 문자열 배열로 정확히 인식해, 문자열 관련 메소드를 사용할 수 있도록 도와줍니다
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

//Tuple
//자바스크립트에 존재하지 않은 것으로, 길이와 자료형이 정해진 배열입니다
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Lee",
//   age: 26,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "autor"],
// };
//만약  role이 두개의 요소를 가지는 것이라면, 위와같이 보일 수 있습니다.
// person.role.push("admin");

//위의 코드의 경우 사용자가 아무리 두개의 요소만 넣으려해도, 새로운 요소는
//들어갈 것이고,role의 타입이 문자열 혹은 숫자 이므로
// 작가라는 role대신에 10이 대체가 될 수 있다는 문제가 발생합니다
//그래서 이를 방지해 주기 위해 Tuple을 이용해 주어야 합니다
//  role: [number, string];
//이 코드는 두개의 요소가 있으며 각각 숫자와 문자만 되어야한다는 특수 배열이라는
//것을 타입스크립트에게 알려주는 것을 이야기합니다
//push의 경우 예외적으로 튜플에서 허용되는 것으로  push에 유의 해 주어야 합니다

// 열거형 :Enum
//형태 : `enum{NEW,OLD}`
//현재 아래는 롤에 따라서 숫자를 부여한 코드 입니다.
enum Role {
  ADMIN = 1,
  READ_ONIY,
  AUTOR,
}

const person = {
  name: "Lee",
  age: 26,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};
console.log(person.role);

//any의 경우에는 어떤 값이나 종류의 데이터가 어디에 저장될지 알수 없는 경우에 대비해
//이용해 주면 좋습니다. 그래도 최대한 사용하지 않는 것이 용이합니다
