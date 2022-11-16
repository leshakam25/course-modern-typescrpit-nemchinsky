type Status = 'ok' | 'loading' | 'error'

const staticX: Status = 'loading'

const printId =(id: number | string): void => {
   if (typeof id ==='string') {
      console.log(id.toUpperCase())
   }
   if (typeof id ==='number') {
      console.log(id.valueOf())
   }
   else {
      console.log('what is it?')
   }
}

const welcome = (person: [string, string] | string): number | string => {
   if (Array.isArray(person)) {
      console.log('hello',person.join(' '))
      return 1;
   } else {
      console.log('hello',person)
      return person;
   }
}