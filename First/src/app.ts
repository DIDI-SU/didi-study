//데코라이터는 클래스에만 적용됩니다
//데코헤이터는 클레스를 실체화하기전에도 그 값을 얻을 수 있습니다
//클래스와 컨스트럭터에 함수정의만 입력되어도
//데코레이텉는저으이됩니다

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}
//_ :잇지만 사용안함
function WithTemplat(template: string, hookId: string) {
  return function (constructor: any) {
    console.log("template");

    const element = document.getElementById(hookId);
    const pe = new constructor();
    if (element) {
      element.innerHTML = template;
      element.querySelector("h1")!.textContent = pe.name;
    }
  };
}
@Logger("as")
@WithTemplat("<h1>hiiii</hi>", "app")
class Persons {
  name = "Max";
  constructor() {
    console.log("사람만드는중 ");
  }
}
const per = new Persons();
console.log(per);
//ㄷ데코레잍터 펙토리

//어떤대상에게 데코레이터를 할당할지 정할수잇음
//그리고 동시에 팩토리는 일반 데코레이터 보다
// 더많은 설정을 적용해서 더많은 방향으로 사용할 수 있음
//팩토리가 일반 데코리잌터 보다 먼저 들어감ㅇㅇ
//
