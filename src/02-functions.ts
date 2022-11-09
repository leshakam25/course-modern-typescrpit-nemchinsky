const sum = (a: number,b: number): number => {
   return a+b
}
sum(1,2)

// void - сообщает что функция завершится
const log = (name: string, userId?: string ): void => {
   console.log('hello', name, ', with id', userId || 'anonym')
} 

log("ivan",'2')

//never - сообщает что функция никогда не доведет свою работу до конца и ретёрн выполнен не будет
const crash = (): never => {
   throw new Error('crash')
} 


const average = (...nums: number[]) => {
   const sum = nums.reduce((current, total)=>current + total,0)
   return sum / nums.length
}