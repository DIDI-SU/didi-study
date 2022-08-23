// //배열 타입이 하나 만들어지는데 만약 비어있다면 any가 됩니다
// //제네릭 타입이면 하나의 인수가 필요하다는 에러
// // Array<t> 제네릭
// // 제네릭은 타입은 다른 타입과 연결되는 종류인데 다른 타입이
// //어떤 타입이어야하는지 대해서는 크게 상관하지 않습니다
// //아래가 바로 제네릭
// const name2: Array<string> = []; //string[]과 결국 같은이야기

// //프로미스타입
// const promise: Promise<string> = new Promise((re, rej) => {
//   setTimeout(() => {
//     re("done");
//   }, 2000);
// });

//제네릭 함수
function merge<T extends object, U extends object>(abjA: T, objB: U) {
  return Object.assign(abjA, objB);
}

const mergeObject = merge({ name: "Max", hobbies: ["Sports"] }, { age: 12 });
const mergeObject2 = merge({ name: "Max" }, { age: 12 });

//별개의 길이 프로퍼티를 인터페이스로 만들어 일단 모든지 길이를 가지도록할수 있다

interface Lengthy {
  length: number;
}

function countAndDescibe<T extends Lengthy>(element: T): [T, string] {
  let de = "Got no value";
  if (element.length === 1) {
    de = `Got ${element.length} elements`;
  } else if (element.length > 1) {
    de = `Got ${element.length} elements`;
  }

  return [element, de];
}

console.log(countAndDescibe("Hi there!"));

function extractConvert<T extends object, U extends keyof T>(obj1: T, key: U) {
  return `result  ${obj1[key]}`;
}

console.log(extractConvert({ name: "lee" }, "name"));

class DataStorage<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("max");
textStorage.addItem("menu");
textStorage.removeItem("menu");

console.log(textStorage.getItems());
