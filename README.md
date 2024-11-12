# Online Learning Platform (OLP)

An interactive learning management system built with the MERN stack (MongoDB, Express.js, React, Node.js) that provides a comprehensive platform for online education. Unique features 

## 🌟 Features

- **User-Friendly Interface**: Intuitive navigation and modern design using Bootstrap and Material UI
- **Course Management**: 
  - Instructors can create and manage courses
  - Students can browse and enroll in courses
  - Progress tracking and course completion certificates
- **Interactive Learning**:
  - Discussion forums
  - Live webinars
  - Real-time chat functionality
- **Multi-Role System**:
  - Student portal
  - Teacher dashboard
  - Admin control panel
- **Responsive Design**: Access content seamlessly across devices
- **Payment Integration**: Support for premium courses and subscriptions

## 🚀 Technical Architecture

### Frontend
- React.js
- Bootstrap
- Material UI
- Axios for API integration

### Backend
- Node.js
- Express.js
- MongoDB
- RESTful API architecture

## 💻 Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository
```bash
git clone https://github.com/r3tr0z1ay3r/OLP-NM-PROJECT.git
cd OLP-NM-PROJECT
```

2. Install dependencies for both frontend and backend
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Configure environment variables
```bash
# Create .env file in backend directory
touch backend/.env

# Add necessary environment variables
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

4. Start the development servers
```bash
# Start backend server
cd backend
npm run dev

# Start frontend server in a new terminal
cd frontend
npm start
```

## 👥 User Roles

### Student
- Register/Login
- Browse course catalog
- Enroll in courses
- Track learning progress
- Participate in discussions
- Earn certificates

### Teacher
- Create and manage courses
- Upload learning materials
- Monitor student progress
- Conduct webinars
- Engage with students

### Admin
- Manage user accounts
- Oversee platform operations
- Monitor course listings
- Handle user issues
- Generate reports

## 🔒 Security Features

- JWT authentication
- Encrypted passwords
- Protected routes
- Role-based access control

## 📱 Responsive Design

The platform is optimized for:
- Desktop computers
- Tablets
- Mobile devices

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details .

