"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function autoBind(target, name, descriptor) {
    const originMethod = descriptor.value;
    const adjustDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originMethod.bind(this);
            return boundFn;
        },
    };
    return adjustDescriptor;
}
class Printer {
    constructor() {
        this.message = 'Hello Decorators!';
    }
    print() {
        console.log(this);
        console.log(this.message);
    }
}
__decorate([
    autoBind
], Printer.prototype, "print", null);
const printer = new Printer();
const btn = document.querySelector('#btn');
btn.addEventListener('click', printer.print);
