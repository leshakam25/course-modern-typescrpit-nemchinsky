"use strict";
let anybody = {
    login: "alex",
    skills: ['fast', 'clever', 'good'],
    level: 'junior'
};
// create a function that change level of incoming developer
function gradeDeveloper(anybody, newlevel) {
    anybody.level = newlevel;
}
gradeDeveloper(anybody, 'middle');
