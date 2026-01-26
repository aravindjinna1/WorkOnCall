# 🚀 WorkOnCall – Local Job Finding Application

WorkOnCall is a full-stack local job-finding web application where users can post jobs or offer services. It includes JWT-based authentication, protected routes, CRUD operations, profile management, and search functionality for jobs and workers.


The application is built with authentication, protected routes, CRUD operations, and search functionality to simulate a real-world job marketplace.

✨ Features

🔐 Authentication & Authorization

User login using JWT

Protected routes (only logged-in users can post or edit data)

Users can edit/delete only their own posts

🧾 Job & Worker Posting

Users can post job requirements

Workers can post their service details

Full CRUD operations (Create, Read, Update, Delete)

👤 Profile Management

View user profile details

Manage posted jobs and services

Delete or update posts from the profile section

🔍 Search Functionality

Search jobs by title/location

Search workers based on service details

User-friendly empty state handling

🧭 Routing

Public and protected routes

Redirects unauthenticated users to login

🛠️ Tech Stack

Frontend

React.js

React Router

Tailwind CSS

Fetch API

Backend

Node.js

Express.js

MongoDB

JWT Authentication

🧠 Key Learnings

Implemented JWT-based authentication and route protection

Handled authorization to restrict access to user-owned data

Designed RESTful APIs with proper error handling

Managed frontend state and conditional rendering

Built a real-world CRUD application with search functionality


## How to Run Locally

```bash
https://github.com/aravindjinna1/WorkOnCall
cd WorkOnCall
npm install
npm start
