"use strict";
function moveAnimal(animal) {
    switch (animal.type) {
        case 'bird':
            console.log('bird is flying ', animal.flyingSpeed);
            break;
        case 'horse':
            console.log('horse is running ', animal.runningSpeed);
            break;
    }
}
moveAnimal({ type: 'bird', flyingSpeed: 20 });
// 类型转换
// const inputDom = document.querySelector('#input-msg')! as HTMLInputElement
const inputDom = document.querySelector('#input-msg');
if (inputDom) {
    inputDom.value = 'Hello TS';
}
const from = {
    id: '11',
    name: '111',
    password: '12121'
};
