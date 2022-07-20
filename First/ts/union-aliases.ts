//union
// 현재 아래의 함수는  현재 두개의 숫자 자료형 인자만 가능한
// 함수 입니다. 만약 문자열과 함께 사용하고 싶은 경우에는 어떻게 해주어야할까요?
const add = (n1: number, n2: number) => {
  const result = n1 + n2;
  return result;
};

// const combine = (input1: number | string, input2: number | string) => {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// };
// const combineAge = combine(10, 15);
// const combineName = combine("lee", 20);

// console.log(combineAge, combineName);

//리터럴
//정확한 값을 가지는 값, 예를 들어 상수 변수에 숫자를 지정한경우, 정확히 타입과 값이 정해져 있어
//사용에 용이해집니다
//리터럴은 주로 유니언 타입을 결합하는데 사용됩니다.

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultType: "as-number" | "as-text"
) => {
  let result;
  if (resultType === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultType === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
};
const combineAge = combine(10, 15, "as-number");
const combineName = combine("lee", "20", "as-text");
const combineString = combine("lee", "ji", "as-text");

console.log(combineAge, combineName, combineString);

//타입 별칭: type alias
type Combinable = number | string;
