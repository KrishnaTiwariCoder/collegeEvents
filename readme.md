# 🚀 CollegeEvents: College Event Management Platform

## 📝 Project Overview

CollegeEvents is an innovative web application designed to revolutionize event management within college societies. The platform provides distinct panels for admins and students, streamlining the process of creating, managing, and participating in various college events.

## ✨ Key Features

- 🔹 Admin Panel
  - Create and manage multiple types of events
  - Define event selection criteria
  - Handle application approvals and rejections
  - Enhanced communication tools

- 🔹 User Panel
  - Browse upcoming, ongoing, and past events
  - Easy event registration
  - Dynamic registration forms
  - Real-time event updates

## 🛠 Technology Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Architecture**: MERN Stack

## 📦 Project Structure

```
college-events/
│
├── admin/        # Admin panel React application
├── client/       # Student/User panel React application
└── server/       # Backend Node.js and Express.js server
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB

### Installation and Setup

1. Clone the repository
```bash
git clone https://github.com/KrishnaTiwariCoder/collegEvents.git
cd collegeEvents
```

2. Install dependencies for each module

#### Server Setup
```bash
cd server
npm install
npm run dev
```

#### Admin Panel Setup
```bash
cd ../admin
npm install
npm start
```

#### Client (User) Panel Setup
```bash
cd ../client
npm install
npm start
```

### Environment Configuration

Create `.env` files in each directory with the following sample configurations:

#### Server `.env`
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/collegeevents
JWT_SECRET=your_jwt_secret
```

#### Admin and Client `.env`
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 🔒 Authentication

The application uses JSON Web Tokens (JWT) for secure authentication across admin and user panels.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🌟 Contact

Your Name - Krishna Tiwari

## 🙏 Acknowledgements

- React.js
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token

---

**Made with ❤️ for College Societies**