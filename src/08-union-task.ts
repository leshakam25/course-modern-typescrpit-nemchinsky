type Level = 'junior' | 'middle' | 'senior';

const current: Level = 'junior'

interface Developer {
  login: string,
  skills: string[],
  level: Level, 
}
 
// create a function that change level of incoming developer
function gradeDeveloper(current: Developer) {
   if (current.level === 'junior'){
    
   }
}