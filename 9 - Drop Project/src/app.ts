// 安全性检查
interface Validatable {
    value: string | number,
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    min?: number,
    max?: number
}

function validate(validatableInput: Validatable): boolean {
    let flag = true
    if (validatableInput.required) {
        flag = flag && validatableInput.value.toString().trim().length !== 0
    }
    if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
        flag = flag && validatableInput.value.length >= validatableInput.minLength
    }
    if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
        flag = flag && validatableInput.value.length <= validatableInput.maxLength
    }
    if (validatableInput.min != null && typeof validatableInput.value === 'number') {
        flag = flag && validatableInput.value >= validatableInput.min
    }
    if (validatableInput.max != null && typeof validatableInput.value === 'number') {
        flag = flag && validatableInput.value <= validatableInput.max
    }
    return flag
}



// 方法装饰器
function autobind(target: any, name: string, descriptor: PropertyDescriptor) {
    // 重写该方法的属性描述符
    const originalMethod = descriptor.value
    const newDescriptor: PropertyDescriptor = {
        configurable: true,//默认为true，保险起见
        get() {
            const boundFn = originalMethod.bind(this)

            return boundFn
        }
    }
    return newDescriptor
}

// 输入模块
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

    private getUserInput(): [string, string, number] | void {
        const title = this.titleInputElement.value;
        const description = this.descriptionInputElement.value;
        const people = this.peopleInputElement.value;

        const titleValidatable: Validatable = {
            value: title,
            required: true,
            maxLength: 20
        }

        const descriptionValidatable: Validatable = {
            value: description,
            required: true,
            minLength: 5
        }

        const peopleValidatable: Validatable = {
            value: +people,
            required: true,
            min: 1,
            max: 5
        }

        if (!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)) {
            alert('Invalid input, please try again!');
            return;
        } else {
            return [title, description, +people];
        }

    }

    private clearUserInput() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }

    @autobind
    private sumbitHandler(event: Event) {
        event.preventDefault()
        const userInput = this.getUserInput()
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput
            console.log(title, description, people)
            this.clearUserInput()
        }

    }


    private configure() {
        this.sumbitElement.addEventListener('click', this.sumbitHandler)
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const prjInput = new ProjectInput();


// 接口定义


//完成模块
class ProjectList {

    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    // 显示类型，是已完成还是未完成
    constructor(private type: 'active' | 'finished') {

        this.templateElement = document.querySelector('#project-list')! as HTMLTemplateElement;
        this.hostElement = document.querySelector('#app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);

        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = `${this.type}-projects`;

        this.renderContent()
        this.attach();
    }

    // 样式渲染
    private renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.innerHTML = this.type.toUpperCase();
    }

    private attach() {
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }
}

const project1 = new ProjectList('active');
const project2 = new ProjectList('finished');

