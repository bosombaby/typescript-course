function autoBind(target: any, name: string, descriptor: PropertyDescriptor) {
    const originMethod = descriptor.value
    const adjustDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originMethod.bind(this)
            return boundFn
        },
    }

    return adjustDescriptor
}




class Printer {
    message = 'Hello Decorators!'

    @autoBind
    print() {

        console.log(this)
        console.log(this.message)
    }
}
const printer = new Printer()

const btn = document.querySelector('#btn')!
btn.addEventListener('click', printer.print)
