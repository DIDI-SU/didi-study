interface AddFm {
  (a: number, b: number): number;
}
let adds: AddFm;

adds = (n1: number, n2: number) => {
  return n1 + n2;
};
interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

let user1: Greetable;

user1 = {
  name: "lee",
  greet(phrase) {
    console.log(`${phrase} ${this.name}`);
  },
};
user1.greet("hi there");

class Person implements Greetable {
  name?: string;
  outputName = "lee";
  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

user1 = new Person("kim");
user1.greet("hi there");
