type Level = 'junior' | 'middle' | 'senior';

interface Developer {
  login: string,
  skills: string[],
  level: Level, 
}

let anybody: Developer = {
  login: "alex",
  skills: ['fast','clever','good'],
  level:'junior'
}
 
// create a function that change level of incoming developer
function gradeDeveloper(anybody: Developer, newlevel: Level) {
    anybody.level = newlevel
   }

   gradeDeveloper(anybody, 'middle')