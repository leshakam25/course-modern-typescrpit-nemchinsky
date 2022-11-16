"use strict";
const numbers = [1, 2, 3, 4];
// способы типизации массивов 
const strs = [];
const strs2 = [];
strs.push("1");
// интерфейс Car сам подтянулся из другого файла
const cars = [];
cars.push({ wheels: 2, brand: 'bmw', type: 'shit', isNew: true });
const arrayOfArray = [];
arrayOfArray.push(['', '']);
function printArray(arr) {
    arr.forEach((el, index) => {
        console.log(el, index);
    });
}
