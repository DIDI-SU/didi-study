interface Greetable {
  name: string;
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
  name: string;
  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

user1 = new Person("kim");
user1.greet("hi there");
