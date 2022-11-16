// Create interfaces User and Admin
// Keys for User: login, email, password, isOnline, lastVisited
// Keys for Admin: login, email, password, isOnline, lastVisited, role

// Create a function login with param user (with keys login and password)
// Check if login and password are not empty and then greet user

interface IUser {
   login: string,
   email: string,
   password: string, 
   isOnline: boolean,
   lastVisited: Date,
}

const user1: IUser = {
   login: 'user1',
   email: 'usermail1@gmail.com',
   password: 'userPass1', 
   isOnline: false,
   lastVisited: new Date(),
}

interface IAdmin {
   login: string,
   email: string,
   password: string, 
   isOnline: boolean,
   lastVisited: Date,
   role: string,
}

const admin1: IAdmin = {
   login: 'user1',
   email: 'usermail1@gmail.com',
   password: 'userPass1', 
   isOnline: false,
   lastVisited: new Date(),
   role:'admin'
}

const login = (user: {login: string,password: string}) => {
   if (user.login && user.password) {
       console.log('Hello maboy')
   }
}

login(user1)
login(admin1)