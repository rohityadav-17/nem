# User Management Web App using Express, Node, Mongoose, and EJS

## Overview

This is a User Management Web Application built using the Model-View-Controller (MVC) architecture. The stack includes:

- Node.js and Express (Backend)
- MongoDB via Mongoose (Database)
- EJS (View rendering)
- Bootstrap 5 (UI styling)
- express-session and bcrypt (Authentication and session management)

---

## Folder Structure

```
nem/
│
├── controllers/        
│   ├── authController.js
│   └── userController.js
│
├── models/             
│   ├── Admin.js
│   └── Employee.js
│
├── routes/             
│   ├── authRoutes.js
│   └── employeeRoutes.js
│
├── views/              
│   ├── auth/    
│   │   ├── login.ejs 
│   │   └── register.ejs 
│   └── user/   
│       ├── dashboard.ejs 
│       └── update.ejs 
│
├── middleware/          
│   └── authMiddleware.js
│
├── config/              
│   └── db.js
│
├── server.js              
└── package.json
```

---

## Technologies Used

- Node.js – Server-side JavaScript
- Express – Web framework
- MongoDB – NoSQL database
- Mongoose – MongoDB ODM
- EJS – Templating engine
- Bootstrap 5 – Responsive UI styling
- bcrypt – Secure password hashing
- express-session – Session management

---

## Features

- Admin login with session-based authentication
- Secure password storage using bcrypt
- Full Employee CRUD:
  - Add user
  - Edit user
  - Delete user (with confirmation)
  - List all users
- EJS-rendered dynamic views
- Responsive UI styled with Bootstrap 5
- Middleware-based route protection

---

## Installation

To run this project locally:

### Clone the Repository

```bash
git clone https://github.com/rohityadav-17/nem.git
cd nem
```

### Install Dependencies

```bash
npm install
```

### Start the Server

```bash
npm start
```

Visit in your browser:

```
http://localhost:4000
```

---

## Usage

1. Register an admin (if registration is enabled) or use pre-seeded admin credentials.
2. Navigate to `/login` to sign in.
3. Access the dashboard and perform user management tasks:
   - Add new users
   - Edit user details
   - Delete users
   - View user list
4. Logout to end the admin session.

---

## Screenshots

### Register

![Register](https://github.com/user-attachments/assets/8b15ac54-d282-4fc4-8ee0-50262c066b97)

### Login Page

![Login](https://github.com/user-attachments/assets/4d08ff1f-dc2b-4d40-b84a-bd6534e1383e)

### Dashboard / User List

![Dashboard](https://github.com/user-attachments/assets/5161c859-b0fe-472a-b504-d9da28d540f4)

### Update User

![Update](https://github.com/user-attachments/assets/b1ae13c7-0587-4a6e-b13f-ec586234f7f3)

### Delete User

![Delete](https://github.com/user-attachments/assets/b9f736e6-fc5f-420e-be2e-2e56bcd952e6)

---

## License

This project is licensed under the MIT License.
