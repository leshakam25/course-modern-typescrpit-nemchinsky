// Интерфейсы пишутся с большой буквы и без знака равно
interface Car {
   wheels: number;
   brand: string;
   type: string;
   isNew: boolean;
   name?: string

   [key:string]: unknown;
}

const car: Car = {
   wheels:4,
   brand:'bmw',
   type:'sedan',
   isNew: false,
}

const car2: Car={
   wheels:4,
   brand:'',
   type:'',
   isNew:true
}