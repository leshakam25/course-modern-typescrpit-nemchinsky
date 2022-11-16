const numbers = [1,2,3,4]

// способы типизации массивов 

const strs: string[] = []
const strs2: Array<string> = []
strs.push("1")

// интерфейс Car сам подтянулся из другого файла

const cars: Car[]=[];
cars.push({ wheels:2, brand:'bmw', type: 'shit', isNew:true})

const arrayOfArray: string[][]=[];
arrayOfArray.push(['',''])

function printArray(arr: unknown[]): void {
   arr.forEach((el,index)=>{
      console.log(el, index);
   })
}