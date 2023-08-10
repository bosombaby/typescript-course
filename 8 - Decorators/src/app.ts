function logger() {
    return function (constructor: Function) {
        console.log(constructor);
    }
}

function withTemplate(template: string, id: string) {
    return function <T extends { new(...args: any[]): { name: string } }>(originConstructor: T) {
        return class extends originConstructor {
            constructor(..._: any[]) {
                super();
                const p = new originConstructor();
                const domElement = document.getElementById(id);
                if (domElement) {
                    domElement.innerHTML = `<h1>${template} - ${p.name}</h1>`
                }

            }
        }
    }
}


// @logger()
@withTemplate('Hello', 'app')
class Person {
    name = 'Max'
    constructor() {
        console.log('Creating person object...');
    }
}

const person = new Person();
console.log(person);









// 类装饰器（Class Decorator）
function Log1(constructor: Function) {
    console.log('类装饰器（Class Decorator）');
    console.log(constructor);
}


// 属性装饰器（Property Decorator）
function Log2(target: any, propertyName: string | Symbol) {
    console.log('属性装饰器（Property Decorator）');
    console.log(target, propertyName);
}


// 访问器装饰器（Accessor Decorator)
function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('访问器装饰器（Accessor Decorator)');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}


// 方法装饰器（Method Decorator）
function Log4(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('方法装饰器（Method Decorator）');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// 参数装饰器（Parameter Decorator）
function Log5(target: any, name: string | Symbol, position: number) {
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

