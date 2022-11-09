// numbers
let x = 10;
// let y = 1234n;
let z = NaN;

// string
let str1: string 
str1 = 'hello'
let symb = Symbol(`as`)
// let d = str1 + symb - ошибка

// boolean
let o = true
o = false

// nothing
let h:undefined = undefined;
let g:null = null

//literal - появляется при использовании con, имеет тип значения переменной
const num = 108
const str2 = "hello"

// universal  any - тип крайнего случае, не рекоменлуется использовать 
let mm:any = 1;
mm = '123';
mm = [];

let xx: unknown = 'hello';
if (typeof xx === 'string') xx.toUpperCase