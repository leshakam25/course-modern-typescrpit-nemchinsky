"use strict";
function printPoint(point) {
    console.log(`go to ${point.x} and ${point.y}`);
}
const obj1 = {
    x: '1',
    y: '2'
};
printPoint(obj1);
const obj2 = {
    x: '1',
    y: '2',
    z: '3'
};
printPoint(obj2);
function printName(user) {
    console.log('hello', user.firsName.toUpperCase());
    // если параметр не обязателен и мы хотим применить к нему методы конкретного типа переменной,
    // необходимо запустить проверку на наличие этого параметра
    if (user.lastName) {
        console.log('bye', user.lastName.toUpperCase());
    }
}
printName({ firsName: 'mike' });
printName({ firsName: 'mike', lastName: 'grinya' });
