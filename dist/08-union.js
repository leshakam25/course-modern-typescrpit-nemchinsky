"use strict";
const staticX = 'loading';
const printId = (id) => {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    if (typeof id === 'number') {
        console.log(id.valueOf());
    }
    else {
        console.log('what is it?');
    }
};
const welcome = (person) => {
    if (Array.isArray(person)) {
        console.log('hello', person.join(' '));
        return 1;
    }
    else {
        console.log('hello', person);
        return person;
    }
};
