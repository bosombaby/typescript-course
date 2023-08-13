interface Bird {
    type: 'bird'
    flyingSpeed: number
}

interface Horse {
    type: 'horse'
    runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
    switch (animal.type) {
        case 'bird':
            console.log('bird is flying ', animal.flyingSpeed);
            break;
        case 'horse':
            console.log('horse is running ', animal.runningSpeed);
            break;
    }
}

moveAnimal({ type: 'bird', flyingSpeed: 20 })


// 类型转换
// const inputDom = document.querySelector('#input-msg')! as HTMLInputElement
const inputDom = document.querySelector('#input-msg')
if (inputDom) {
    (inputDom as HTMLInputElement).value = 'Hello TS'
}


//索引类型接口
interface ErrorContainer {

    id: string
    [prop: string]: string
}

const from: ErrorContainer = {
    id: '11',
    name: '111',
    password: '12121'
}