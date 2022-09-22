// 객체 지향으로 진행
//validation
//minLength? 뒤에 물음표는 선택사항
// interface Validatable {
//   value: string | number;
//   required?: boolean;
//   minLength?: number;
//   maxLength?: number;
//   min?: number;
//   max?: number;
// }
// function validate(validatableInput: Validatable) {
//   let isValid = true;
//   if (validatableInput.required) {
//     isValid = isValid && validatableInput.value.toString().trim().length !== 0;
//   }
//   if (
//     validatableInput.minLength !== undefined &&
//     typeof validatableInput.value === "string"
//   ) {
//     isValid =
//       isValid && validatableInput.value.length > validatableInput.minLength;
//   }
//   if (
//     validatableInput.maxLength !== undefined &&
//     typeof validatableInput.value === "string"
//   ) {
//     isValid =
//       isValid && validatableInput.value.length < validatableInput.maxLength;
//   }

//   if (
//     validatableInput.min !== undefined &&
//     typeof validatableInput.value === "number"
//   ) {
//     isValid = isValid && validatableInput.value > validatableInput.min;
//   }
//   if (
//     validatableInput.max !== undefined &&
//     typeof validatableInput.value === "number"
//   ) {
//     isValid = isValid && validatableInput.value < validatableInput.max;
//   }
//   return isValid;
// }

// // auto bind
// function autobind(
//   target: any,
//   methodName: string,
//   decriptor: PropertyDescriptor
// ) {
//   const originalMethod = decriptor.value;
//   const adjDescriptor: PropertyDescriptor = {
//     configurable: true,
//     get() {
//       const boundFn = originalMethod.bind(this);
//       return boundFn;
//     },
//   };
//   return adjDescriptor;
// }

// //project input
// class ProjectInput {
//   templateElement: HTMLTemplateElement;
//   hostElement: HTMLDivElement;
//   element: HTMLFormElement;
//   titleInput: HTMLInputElement;
//   decriptionInput: HTMLInputElement;
//   peopleInput: HTMLInputElement;

//   constructor() {
//     this.templateElement = document.getElementById(
//       "project-input"
//     )! as HTMLTemplateElement;
//     this.hostElement = document.getElementById("app")! as HTMLDivElement;

//     const importedContent = document.importNode(
//       this.templateElement.content,
//       true
//     );
//     this.element = importedContent.firstElementChild as HTMLFormElement;
//     this.element.id = "user-input";
//     this.titleInput = this.element.querySelector("#title")! as HTMLInputElement;
//     this.decriptionInput = this.element.querySelector(
//       "#description"
//     )! as HTMLInputElement;
//     this.peopleInput = this.element.querySelector(
//       "#people"
//     )! as HTMLInputElement;
//     this.configure();
//     this.attach();
//   }

//   private getherUserInput(): [string, string, number] | void {
//     const enteredTitle = this.titleInput.value;
//     const enterdDescripton = this.decriptionInput.value;
//     const enteredPeople = this.peopleInput.value;

//     const titleVal: Validatable = {
//       value: enteredTitle,
//       required: true,
//     };

//     const desVal: Validatable = {
//       value: enterdDescripton,
//       required: true,
//       minLength: 5,
//     };
//     const peopleVal: Validatable = {
//       value: enteredPeople,
//       required: true,
//       min: 1,
//       max: 5,
//     };

//     if (!validate(titleVal) || !validate(desVal) || !validate(peopleVal)) {
//       alert("Invalide Input Plz Try Again");
//       return;
//     } else {
//       return [enteredTitle, enterdDescripton, parseInt(enteredPeople)];
//     }
//   }

//   private clearInputs() {
//     this.titleInput.value = "";
//     this.decriptionInput.value = "";
//     this.peopleInput.value = "";
//   }

//   @autobind
//   private sumbitHandler(e: Event) {
//     e.preventDefault();
//     const userInput = this.getherUserInput();
//     if (Array.isArray(userInput)) {
//       const [title, decription, people] = userInput;
//       console.log(title, decription, people);
//       this.clearInputs();
//     }
//   }

//   private configure() {
//     this.element.addEventListener("submit", this.sumbitHandler);
//   }

//   private attach() {
//     this.hostElement.insertAdjacentElement("afterbegin", this.element);
//   }
// }

// const prjInput = new ProjectInput();

// //사용하던 방식으로 하면 어케될지 한번 해보자

interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}
const template: HTMLTemplateElement = document.getElementById(
  "project-input"
)! as HTMLTemplateElement;
//렌더링해야하는 곳
const host: HTMLDivElement = document.getElementById("app")! as HTMLDivElement;
//렌더링 되는 대상
const renderItem = document.importNode(template.content, true);
//form만 데려온다
const forms: HTMLFormElement = renderItem.firstElementChild! as HTMLFormElement;

host.insertAdjacentElement("afterbegin", forms);

//각각의 값을 데려오기
const title: HTMLInputElement = forms.querySelector(
  "#title"
)! as HTMLInputElement;
const decription: HTMLInputElement = forms.querySelector(
  "#description"
)! as HTMLInputElement;
const people: HTMLInputElement = forms.querySelector(
  "#people"
)! as HTMLInputElement;

//입력값을 비워줌
const clearInput = () => {
  title.value = "";
  decription.value = "";
  people.value = "";
};

//입력값 확인해주는 함수
const checkInputsLength = (items: [string, string, string]): boolean => {
  if (items.map((item) => item.trim().length == 0).includes(true)) {
    return true;
  }
  return false;
};

// 유저의 인풋을 모두 받아주는 함수

const getUserInputs = (): [string, string, number] | void => {
  const enteredTitle = title.value;
  const enterdDescripton = decription.value;
  const enteredPeople = people.value;
  if (checkInputsLength([enteredTitle, enterdDescripton, enteredPeople])) {
    alert("Invalide Input Plz Try Again");
    return;
  } else {
    return [enteredTitle, enterdDescripton, parseInt(enteredPeople)];
  }
};

//이벤트 리스너 콜백
const handleSubmit = (e: Event) => {
  e.preventDefault();
  const userInputs = getUserInputs();
  console.log(userInputs);
  clearInput();
};
//이벤트 리스너
forms.addEventListener("submit", handleSubmit);
