# TaskBoard – Frontend Developer Intern Assignment

## Tech Stack
- React.js (Vite)
- Tailwind CSS
- Node.js + Express
- MongoDB
- JWT Authentication

## Features
- User registration & login
- JWT-based authentication (HttpOnly cookies)
- Protected dashboard
- Task CRUD operations
- Search & filter tasks
- Secure backend (bcrypt, middleware)

## Setup Instructions

### Backend
```bash
cd backend
npm install
npm run dev

### Frontend
```bash
cd frontend
npm install
npm run dev

API Endpoints
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id
Scaling Notes
Frontend can use React Query for caching & state sync
Backend can be split into microservices
Redis for session & rate limiting
Role-based access control
Docker + CI/CD pipeline
API Gateway for large-scale deployments