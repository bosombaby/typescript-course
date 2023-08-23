"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validate(validatableInput) {
    let flag = true;
    if (validatableInput.required) {
        flag = flag && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
        flag = flag && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
        flag = flag && validatableInput.value.length <= validatableInput.maxLength;
    }
    if (validatableInput.min != null && typeof validatableInput.value === 'number') {
        flag = flag && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null && typeof validatableInput.value === 'number') {
        flag = flag && validatableInput.value <= validatableInput.max;
    }
    return flag;
}
// 方法装饰器
function autobind(target, name, descriptor) {
    // 重写该方法的属性描述符
    const originalMethod = descriptor.value;
    const newDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return newDescriptor;
}
// 输入模块
class ProjectInput {
    constructor() {
        this.templateElement = document.querySelector('#project-input');
        this.hostElement = document.querySelector('#app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.sumbitElement = this.element.querySelector('#sumbit-value');
        this.configure();
        this.attach();
    }
    getUserInput() {
        const title = this.titleInputElement.value;
        const description = this.descriptionInputElement.value;
        const people = this.peopleInputElement.value;
        const titleValidatable = {
            value: title,
            required: true,
            maxLength: 20
        };
        const descriptionValidatable = {
            value: description,
            required: true,
            minLength: 5
        };
        const peopleValidatable = {
            value: +people,
            required: true,
            min: 1,
            max: 5
        };
        if (!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)) {
            alert('Invalid input, please try again!');
            return;
        }
        else {
            return [title, description, +people];
        }
    }
    clearUserInput() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }
    sumbitHandler(event) {
        event.preventDefault();
        const userInput = this.getUserInput();
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput;
            console.log(title, description, people);
            this.clearUserInput();
        }
    }
    configure() {
        this.sumbitElement.addEventListener('click', this.sumbitHandler);
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "sumbitHandler", null);
const prjInput = new ProjectInput();
// 接口定义
//完成模块
class ProjectList {
    // 显示类型，是已完成还是未完成
    constructor(type) {
        this.type = type;
        this.templateElement = document.querySelector('#project-list');
        this.hostElement = document.querySelector('#app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = `${this.type}-projects`;
        this.renderContent();
        this.attach();
    }
    // 样式渲染
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul').id = listId;
        this.element.querySelector('h2').innerHTML = this.type.toUpperCase();
    }
    attach() {
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }
}
const project1 = new ProjectList('active');
const project2 = new ProjectList('finished');
//# sourceMappingURL=app.js.map