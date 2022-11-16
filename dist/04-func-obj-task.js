"use strict";
// Create interfaces User and Admin
// Keys for User: login, email, password, isOnline, lastVisited
// Keys for Admin: login, email, password, isOnline, lastVisited, role
const user1 = {
    login: 'user1',
    email: 'usermail1@gmail.com',
    password: 'userPass1',
    isOnline: false,
    lastVisited: new Date(),
};
const admin1 = {
    login: 'user1',
    email: 'usermail1@gmail.com',
    password: 'userPass1',
    isOnline: false,
    lastVisited: new Date(),
    role: 'admin'
};
const login = (user) => {
    if (user.login && user.password) {
        console.log('Hello maboy');
    }
};
login(user1);
login(admin1);
