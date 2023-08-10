"use strict";
class Course {
    constructor(book, price) {
        this.book = book;
        this.price = price;
    }
}
const btnDom = document.querySelector('#sumbit');
btnDom.addEventListener('click', (e) => {
    e.preventDefault();
    const bookDom = document.querySelector('#book');
    const priceDom = document.querySelector('#price');
    const book = bookDom.value;
    const price = +priceDom.value;
    const c1 = new Course(book, price);
    console.log(c1);
});
