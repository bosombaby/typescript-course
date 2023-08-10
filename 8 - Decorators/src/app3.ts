interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[] // ['required', 'positive']     
    }
}







class Course {
    book: string
    price: number

    constructor(book: string, price: number) {
        this.book = book
        this.price = price
    }

}

const btnDom = document.querySelector('#sumbit') as HTMLButtonElement
btnDom.addEventListener('click', (e) => {
    e.preventDefault()

    const bookDom = document.querySelector('#book') as HTMLInputElement
    const priceDom = document.querySelector('#price') as HTMLInputElement

    const book = bookDom.value
    const price = +priceDom.value

    const c1 = new Course(book, price)
    console.log(c1)

})

