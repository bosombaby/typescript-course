"use strict";
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
    sumbitHandler(event) {
        event.preventDefault();
        console.log(this.titleInputElement.value);
    }
    configure() {
        this.sumbitElement.addEventListener('click', this.sumbitHandler.bind(this));
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const prjInput = new ProjectInput();
//# sourceMappingURL=app.js.map