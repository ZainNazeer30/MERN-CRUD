MERN CRUD Application

A fully functional MERN Stack CRUD Application built with MongoDB, Express.js, React.js, and Node.js.
The frontend UI is designed using Bootstrap 5, and the project includes features like adding, viewing, updating, and deleting users.

🚀 Project Features
Frontend (React + Bootstrap)

Responsive clean UI with Bootstrap 5

Functional User Table

Create User Form

Update User Form

Delete User with instant UI update

Client-side routing using React Router DOM

API handling using Axios

Notifications using React Hot Toast

Backend (Node.js + Express + MongoDB)

RESTful API (GET, POST, PUT, DELETE)

MongoDB database connection using Mongoose

Express routing & controllers

Error handling & validation

📁 Project Structure
Mern-crud/
│
├── client/         # React frontend
│   ├── src/
│   └── package.json
│
├── server/         # Backend (Node + Express)
│   ├── Controller/
│   ├── Model/
│   ├── Routes/
│   ├── index.js
│   └── package.json
│
└── README.md

🔧 Tech Stack
Frontend

React.js

React Router

Bootstrap 5

Axios

React Hot Toast

Backend

Node.js

Express.js

MongoDB

Mongoose

Nodemon

Morgan

📦 Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/mern-crud.git
cd mern-crud

2. Setup Server
cd server
npm install

Create .env file
MONGO_URI=your_mongodb_connection_string
PORT=8000

Start Backend
npm start

3. Setup Client
cd client
npm install

Start Frontend
npm start


Frontend: http://localhost:3000
Backend: http://localhost:8000
CORS enabled

Environment variables using dotenv
