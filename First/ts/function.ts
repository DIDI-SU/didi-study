// 함수
// 현재까지는  함수의 매개변수에 자료형을 지정하는 작업을 통해
// 함수를 이용해 보았습니다
// 이제 아래의 함수를 통해 다른 작업을 해볼까요?

// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// 여기까지는 이제 전에 공부해보았던 함수의 형태와 동일할 것입니다
// 하지만 이제는 반환되는 값의 자료형을 지정해 볼 수 있습니다
// 물론 타입 추론을 통해 지정해 주지 않는 경우도 있지만 만약 명시적으로
// 만약 여기서 반환되는 값을 문자열로 지정을 한다면, 바로 에러를 만날 수 있습니다
// function add(n1: number, n2: number) :string {
//     return n1 + n2;
//   }
// number을  sting에 할당할 수 없다고요.
// 반환 타입에는 조금 새로운 타입이 존재 합니다

function add(n1: number, n2: number) {
  return n1 + n2;
}
function printResult(num: number) {
  console.log("result :" + num);
}

console.log(printResult(add(2, 5)));

// 현재 위의  printResult는  add라는 함수를 인자로 넘겨 받아 최종 합을 출력해주는 함수입니다
// 결과 값은 그러면 어떤 자료형일까요? 아마 문자열로 시작하니, 문자열이지 않을까 하는 생각이
// 들지도 모르겠지만, 여기서는 아무것도 반환하지 않아 void라는 자료 형을 얻게 됩니다
//void는 반환문이 없다는 것을 의미합니다. 그런데 무사 히출력을 했음에도 왜 void인걸까요?
console.log(printResult(add(2, 5)));
//만약 위의 결과를 이렇게 출력해 보면 우리는 `undefined` 이라는 값을 얻게 됩니다
//자바스크립트는 아무것도 반환하지 않은 함수를 반환하면,  `undefined` 이라는 값을 얻게 됩니다

// `undefined`  는 역시 ts 에서는 자료형으로 사용되게 됩니다, 일단 존재 하는 값이니까요
// void는 반환문이 없다는 것을 이야기합니다
// void!==  undefined , undefined는 실제로 값이 undefined이 나오는 경우를 이야기합니다

//값 반환하지 않는 함수 기본적으로  void!

//함수 자체에 타입, 즉 자료형이 존재하는 경우

// let combineValue;
// combineValue = add;
// console.log(combineValue(8, 8));
// 현재 위의 함수는 이전에 만들어준 add 라는 함수를 변수에 할당해 주엇습니다
// 그런데 현재 타입스크립트의 관점으로 보자면 combineValue라는 값의 자료형이  any라는 것이
// 조금 애매할 것입니다.
// 특히  let으로 선언되어 있고  any의형태 이므로, 결국 어떤 것을 할당해 주어도
// 컴파일시 에러 없이 무사히 진행 될 것이라는 위험성이 생길수도 있죠.

// let combineValue: Function;
// combineValue = add;
// console.log(combineValue(8, 8));
//그래서 이제 위와같이 함수라는 타입을 선언해 줄 수 있습니다.
//그런데 여기서 실수로 ㄷ다른 함수를 지정하게 된다면 또 문ㅈ가 발생할 수 있습니다

//그래서 이를 해결하기 위해서 함수 타입을 이용해 주면 됩니다
//즉 아래의 함수처럼 변수명 :( 변수)=> 반환되어 받을 값
//의 형태로 이야기해주면 됩니다
//이제 아래의 add 만 할당 받기 위해, 두 인자가 모두 숫자이고, 결과도 숫자인 함수만
// 수용할수 있다는 것을 의미해
let combineValue: (a: number, b: number) => number;
combineValue = add;
//combineValue=printResult :  void 타입, 인자가 1개이므로 수용이 어렵다는 에러를 받게 됩니다
console.log(combineValue(8, 8));

//콜백과 함수 타입은 비슷하게 동작합니다

function addAndHandle(num1: number, num2: number, cb: (num: number) => void) {
  const result = num1 + num2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result + "결과 ");
  return result;
});
