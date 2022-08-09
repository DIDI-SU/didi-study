// const add = (n1: number, n2: number = 1) => n1 + n2;

// const printOutput: (a: number | string) => void = (output) => {
//   console.log(output);
// };

// const button = document.querySelector("button");
// if (button) {
//   button.addEventListener("click", (e) => console.log(e));
// }

// printOutput(add(5, 4));

// const hobbies = ["Sports", "Cooking"];
// const activeHoobies = ["Hiking"];

// hobbies.push(...activeHoobies);

// console.log(hobbies);

// const person = {
//   name: "max",
//   age: 30,
// };

// const copiedPerson = { ...person };
// copiedPerson.name = "Lee";

// console.log(person.name === copiedPerson.name);

//여러개의 인자를 넣게 하고 싶은 경우
const add = (...num: number[]) => {
  let result = 0;
  num.forEach((item) => (result += item));
  console.log(result);
};

const addNumber = add(1, 2, 3, 4);

//구조 분할
const hobbies = ["Sports", "Cooking"];
const activeHoobies = ["Hiking"];

const [first, second, ...remaing] = hobbies;
console.log(first, second);

const person = {
  names: "max",
  age: 30,
};

const { names, age } = person;
