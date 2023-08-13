const backData = {
    name: 'John',
    job: {
        title: 'Frontend',
        price: 2000
    }
}

console.log(backData?.job?.price);

const userInput = undefined
const result = userInput ?? 'DEFAULT' //不存在或者null的时候才会使用默认值
console.log(result);





