# 💼 Job Portal — mein Stack

A full-stack **Job Portal web application** built using the bern stack, where **job seekers can search and apply for jobs** and **recruiters can create companies, post jobs, and manage applications**.

The project focuses on real-world authentication, REST APIs, role-based functionality, job management, application tracking, and a responsive modern UI.

---

## 🚀 Live Demo

🔗 **Live Website:** [https://job-portal-frontend-hazel.vercel.app/]

🔗 **Backend API:** [(https://job-portal-backend-alwi.onrender.com)]

---

## 📌 Features

### 👨‍💻 Job Seeker

* User registration and login
* JWT-based authentication
* Secure authentication using HTTP-only cookies
* Browse available jobs
* Search jobs by keywords
* Filter jobs
* View detailed job descriptions
* Apply for jobs
* Track applied jobs
* Manage user profile
* Upload profile picture/resume
* View application status

### 🏢 Recruiter / Admin

* Recruiter authentication
* Create and manage company profiles
* Upload company logo
* Post new jobs
* Edit job details
* View posted jobs
* View applicants
* Manage job applications
* Update application status

### ⚡ Additional Features

* Responsive UI
* Pagination
* Search functionality
* Debouncing
* Throttling
* Skeleton loaders
* Protected routes
* Redux state management
* Persistent authentication state
* RESTful APIs
* MongoDB database integration
* Error handling and loading states

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* React Router
* Redux Toolkit
* Redux Persist
* Tailwind CSS
* shadcn/ui
* Lucide React
* Vite
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Cookie Parser
* CORS
* dotenv
* REST APIs

### Tools

* Git
* GitHub
* VS Code
* Postman
* MongoDB Compass

---

## 🏗️ Project Architecture

```text
Job-Portal/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## 🔐 Authentication

The application uses **JWT-based authentication**.

Authentication flow:

```text
User Login
    ↓
Backend validates credentials
    ↓
JWT Token generated
    ↓
Token stored in HTTP-only Cookie
    ↓
Authentication Middleware
    ↓
Protected API Routes
```

Protected routes are accessible only to authenticated users.

---

## 🗄️ Database Models

The application uses MongoDB with Mongoose.

### User

Stores user information such as:

* Name
* Email
* Password
* Phone
* Role
* Profile information

### Company

Stores recruiter/company information:

* Company name
* Description
* Website
* Location
* Logo
* Created by

### Job

Stores job information:

* Job title
* Description
* Requirements
* Salary
* Experience level
* Location
* Job type
* Number of positions
* Company
* Created by
* Applications

### Application

Stores job application information:

* Applicant
* Job
* Status
* Application details
* Timestamps

---

## 🔄 Application Flow

```text
                    JOB PORTAL
                        │
          ┌─────────────┴─────────────┐
          │                           │
     JOB SEEKER                    RECRUITER
          │                           │
          ▼                           ▼
      Register/Login             Register/Login
          │                           │
          ▼                           ▼
     Browse Jobs                Create Company
          │                           │
          ▼                           ▼
     Search/Filter                 Post Job
          │                           │
          ▼                           ▼
      Apply Job                 View Applicants
          │                           │
          ▼                           ▼
   Track Application             Update Status
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/job-portal.git
```

### 2. Navigate to the project

```bash
cd job-portal
```

### 3. Install frontend dependencies

```bash
cd frontend
npm install
```

### 4. Install backend dependencies

```bash
cd ../backend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

> Never commit your `.env` file to GitHub.

Make sure `.env` is included in `.gitignore`.

---

## ▶️ Run the Project

### Start Backend

```bash
cd backend
npm run dev
```

Backend will run on:

```text
http://localhost:8000
```

### Start Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## 🔌 API Structure

The backend follows a RESTful API architecture.

Example routes:

```text
/api/v1/user
/api/v1/company
/api/v1/job
/api/v1/application
```

### Authentication

```text
POST   /api/v1/user/register
POST   /api/v1/user/login
POST   /api/v1/user/logout
GET    /api/v1/user/profile
```

### Jobs

```text
POST   /api/v1/job/post
GET    /api/v1/job/get
GET    /api/v1/job/get/:id
GET    /api/v1/job/admin
```

### Applications

```text
POST   /api/v1/application/apply/:id
GET    /api/v1/application/get
GET    /api/v1/application/:id
POST   /api/v1/application/status/:id/update
```

> API routes may change as the project continues to evolve.

---

## 🧠 Key Concepts Used

This project helped implement several real-world development concepts:

* REST API development
* MVC architecture
* JWT authentication
* HTTP-only cookies
* Middleware
* Protected routes
* Role-based functionality
* MongoDB relationships using ObjectId references
* Redux Toolkit
* Redux Persist
* API integration using Axios
* Debouncing
* Throttling
* Pagination
* File uploads
* Error handling
* Loading states
* Responsive UI design

---

## 📸 Screenshots

### 🏠 Home Page

*Add screenshot here*

### 🔍 Job Search

*Add screenshot here*

### 📄 Job Description

*Add screenshot here*

### 👤 User Profile

*Add screenshot here*

### 🏢 Recruiter Dashboard

*Add screenshot here*

### 📋 Applications

*Add screenshot here*

---

## 🔮 Future Improvements

* Email notifications
* Advanced job filtering
* Resume parsing using AI
* AI-powered job recommendations
* Recruiter analytics dashboard
* Real-time notifications
* Chat between recruiter and candidate
* Interview scheduling
* Job recommendation system
* Deployment with CI/CD

---

## 👨‍💻 Developer

**Shiv Raghuwanshi**

B.Tech — Computer Science & Engineering

### Skills

```text
Java | JavaScript | React.js | Node.js | Express.js
MongoDB | REST APIs | Redux | Git | GitHub
HTML | CSS | Tailwind CSS | TypeScript
```

---

##  Support

If you find this project useful, consider giving it a  on GitHub!

---

## 📄 License

This project is created for learning and development purposes.