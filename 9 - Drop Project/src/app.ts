class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;
    sumbitElement: HTMLButtonElement;


    constructor() {
        this.templateElement = document.querySelector('#project-input')! as HTMLTemplateElement;
        this.hostElement = document.querySelector('#app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description')! as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people')! as HTMLInputElement;
        this.sumbitElement = this.element.querySelector('#sumbit-value')! as HTMLButtonElement;

        this.configure();
        this.attach();
    }

    private sumbitHandler(event: Event) {
        event.preventDefault()
        console.log(this.titleInputElement.value)
    }
    private configure() {

        this.sumbitElement.addEventListener('click', this.sumbitHandler.bind(this))
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const prjInput = new ProjectInput();