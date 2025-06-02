User Management Web App using Express, Node, Mongoose, and EJS

Overview
This project is a User Management Web Application built using the Model-View-Controller (MVC) architecture. It utilizes Node.js, Express, MongoDB (via Mongoose), and EJS for rendering dynamic views. The interface is styled using Bootstrap 5, and user sessions and authentication are managed securely with express-session and bcrypt.

Table of Contents

Installation

Folder Structure

Technologies Used

Features

Usage

Installation

To run this project locally:

Clone the repository:

git clone https://github.com/rohityadav-17/nem.git
cd nem

Install dependencies:

npm install

Run the server:

npm start

Visit: http://localhost:4000

Folder Structure

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
│       ├── login.ejs 
│       ├── register.ejs 
│   ├── user/   
│       ├── dashboard.ejs 
│       ├── update.ejs 
│
├── middleware/          
│   └── authMiddleware.js
│
├── config/              
│   └── db.js
│
├── server.js              
└── package.json

Technologies Used

Node.js – Server-side JavaScript

Express – Web framework for Node.js

MongoDB – NoSQL database

Mongoose – ODM for MongoDB

EJS – Templating engine

Bootstrap 5 – Responsive UI styling

bcrypt – Password hashing

express-session – Session management

Features

Admin login and session-based authentication

Secure password storage using bcrypt

Employee CRUD operations:

Add new user

Edit user details

Delete user with confirmation modal

List all user

EJS-based dynamic views

Bootstrap-styled responsive design

Middleware-based route protection

Usage

Register an admin (if enabled) or use seeded admin credentials.

Log in as admin at /login.

Access dashboard and manage user data.

Add, edit, or delete user records.

Logout from the admin session.

Screenshots

Here are some screenshots of the application in action:

1. Register
   
![{B94A2C03-A6F7-4549-BBF4-491DC2AACEA3}](https://github.com/user-attachments/assets/8b15ac54-d282-4fc4-8ee0-50262c066b97)

2. Login Page

![{85E059FB-4BE8-41BB-BC23-DB12083A04EF}](https://github.com/user-attachments/assets/4d08ff1f-dc2b-4d40-b84a-bd6534e1383e)

3. Dashboard / Add User / User List

![{B96D12F1-132A-4416-B705-34A68E00A790}](https://github.com/user-attachments/assets/5161c859-b0fe-472a-b504-d9da28d540f4)

4. Update User

![{D0C66FF7-F94C-406A-A7EA-98E08688AF03}](https://github.com/user-attachments/assets/b1ae13c7-0587-4a6e-b13f-ec586234f7f3)

5. Delete User
![{A3779036-4B2A-4564-9EDC-3675A277E9DC}](https://github.com/user-attachments/assets/b9f736e6-fc5f-420e-be2e-2e56bcd952e6)



