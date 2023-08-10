"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logger() {
    return function (constructor) {
        console.log(constructor);
    };
}
function withTemplate(template, id) {
    return function (originConstructor) {
        return class extends originConstructor {
            constructor(..._) {
                super();
                const p = new originConstructor();
                const domElement = document.getElementById(id);
                if (domElement) {
                    domElement.innerHTML = `<h1>${template} - ${p.name}</h1>`;
                }
            }
        };
    };
}
// @logger()
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
};
Person = __decorate([
    withTemplate('Hello', 'app')
], Person);
const person = new Person();
console.log(person);
// 类装饰器（Class Decorator）
function Log1(constructor) {
    console.log('类装饰器（Class Decorator）');
    console.log(constructor);
}
// 属性装饰器（Property Decorator）
function Log2(target, propertyName) {
    console.log('属性装饰器（Property Decorator）');
    console.log(target, propertyName);
}
// 访问器装饰器（Accessor Decorator)
function Log3(target, name, descriptor) {
    console.log('访问器装饰器（Accessor Decorator)');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// 方法装饰器（Method Decorator）
function Log4(target, name, descriptor) {
    console.log('方法装饰器（Method Decorator）');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// 参数装饰器（Parameter Decorator）
function Log5(target, name, position) {
    console.log('参数装饰器（Parameter Decorator）');
    console.log(target);
    console.log(name);
    console.log(position);
}
// 产品类
// @Log1
// class Product {
//     @Log2
//     title: string
//     private _price: number
//     constructor(t: string, p: number) {
//         this.title = t;
//         this._price = p;
//     }
//     @Log3
//     set setPrice(val: number) {
//         if (val > 0) {
//             this._price = val;
//         }
//     }
//     @Log4
//     calculateTax(@Log5 tax: number) {
//         return this._price * (1 + tax);
//     }
// }
