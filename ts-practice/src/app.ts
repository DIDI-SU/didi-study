// // 객체 지향으로 진행

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInput: HTMLInputElement;
  decriptionInput: HTMLInputElement;
  peopleInput: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedContent = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedContent.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";
    this.titleInput = this.element.querySelector("#title")! as HTMLInputElement;
    this.decriptionInput = this.element.querySelector(
      "#description"
    )! as HTMLInputElement;
    this.peopleInput = this.element.querySelector(
      "#people"
    )! as HTMLInputElement;
    this.configure();
    this.attach();
  }

  private sumbitHandler(e: Event) {
    e.preventDefault();
    console.log(this.titleInput.value);
  }

  private configure() {
    this.element.addEventListener("submit", this.sumbitHandler.bind(this));
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();

// //사용하던 방식으로 하면 어케될지 한번 해보자
// const template: HTMLTemplateElement = document.getElementById(
//   "project-input"
// )! as HTMLTemplateElement;
// //렌더링해야하는 곳
// const host: HTMLDivElement = document.getElementById("app")! as HTMLDivElement;
// //렌더링 되는 대상
// const renderItem = document.importNode(template.content, true);
// //form만 데려온다
// const forms: HTMLFormElement = renderItem.firstElementChild! as HTMLFormElement;

// host.insertAdjacentElement("afterbegin", forms);

// //각각의 값을 데려오기
// const title: HTMLInputElement = forms.querySelector(
//   "#title"
// )! as HTMLInputElement;
// const decription: HTMLInputElement = forms.querySelector(
//   "#decription"
// )! as HTMLInputElement;
// const people: HTMLInputElement = forms.querySelector(
//   "#people"
// )! as HTMLInputElement;
// //이벤트 리스너 콜백
// const handleSubmit = (e: Event) => {
//   e.preventDefault();
//   console.log(title.value);
// };
// //이벤트 리스너
// forms.addEventListener("submit", handleSubmit);
