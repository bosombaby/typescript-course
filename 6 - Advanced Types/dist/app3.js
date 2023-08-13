"use strict";
var _a;
const backData = {
    name: 'John',
    job: {
        title: 'Frontend',
        price: 2000
    }
};
console.log((_a = backData === null || backData === void 0 ? void 0 : backData.job) === null || _a === void 0 ? void 0 : _a.price);
const userInput = undefined;
const result = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT'; //不存在或者null的时候才会使用默认值
console.log(result);
