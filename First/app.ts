//unknown
//현재 우리는 유저가 어떤 값을 입력할지 모르므로 unknown이라는 타입을
// 변수에 지정해 주었습니다
// let userInput: unknown;

// userInput = 5;
// userInput = "lee";

//그리고 unknown의 경우에는 어떤 값을 넣어도 에러 없이 무사히 컴파일되는 것을 확인할 수 있습니다
//자세히 생각해 보니 아마 변수에 아무런 타입을 지정해 주지 않은 상태에도
//우리는 이와 같은 결과를얻을 수 있습니다
//그렇다면  any와  unknown의 차이는 무엇일까요?
//한번 문자열 자료형을 지니는 유저명 변수에 유저 인풋을 할당해 주니
//에러가 발생했습니다  unknown은 string에 적용할수 없다구요
let userInput: unknown;
let userName: string;
userInput = 5;
userInput = "lee";
// userName= userInput
//반대로  any의 경우에는 가능합니다.  unknown은  any보다는 조금더
// 제한적인 타입으로, 중간에 한번 변수의 자료형을 확인해 주어야 합니다

if (typeof userInput === "string") {
  userName = userInput;
}
//any를 사용하는 것보다 . unknown을 사용해주는 것이 타입을 확인하고
// 에러를 방지하는 일등을 진행해 주기에 용이합니다
// 물론 어떤 값이 올지 조금이라도 면확하다면  union을 사용해 주어야하지만요

//절대 :never => 함수가 반환할수 있는 타입
//이함수는 언제나 스크립트를 충돌해, 아무것도 반환하지 않습니다
//즉 아무런 값을 출력하지 않습니다
//그래서  never역시 가능합니다
// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }

// const result = generateError("error!", 500);
// console.log(result);
// function add(num: number, num2: number): void {
//   const result: number = num + num2;
//   console.log(result);
// }
