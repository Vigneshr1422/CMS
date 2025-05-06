
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const http = require('http'); // Required to create a raw HTTP server
const { Server } = require('socket.io'); // Import socket.io
const connectDB = require('./config/db');

// Import routes
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const staffAddStudentRoutes = require('./routes/staffaddstudent');
const formStudentRoutes = require('./routes/formstudent');
const verificationRoutes  = require('./routes/verificationRoutes');
const staffRoutes = require("./routes/staffRoutes");
const showStaffRoutes = require('./routes/showStaffRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const server = http.createServer(app); // Create an HTTP server
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173', 'https://vigneshcms.netlify.app'],
    methods: ['GET', 'POST', 'PUT'],
    credentials: true,
  },
});


// Socket.IO event handling
io.on('connection', (socket) => {
  console.log(`🔌 User connected: ${socket.id}`);

  socket.on('send_message', (data) => {
    console.log('Message received:', data);
    // Emit the message to the receiver (assuming data.receiverId is socket ID or custom room)
    io.to(data.receiverId).emit('receive_message', data);
  });

  socket.on('join_room', (roomId) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });

  socket.on('disconnect', () => {
    console.log(`❌ User disconnected: ${socket.id}`);
  });
});

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://vigneshcms.netlify.app'],
  credentials: true,
}));

app.use(express.json());

// Routes
app.use('/api/show-staff', showStaffRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/staffaddstudent', staffAddStudentRoutes);
app.use('/api/formstudent', formStudentRoutes);
app.use('/api/verification', verificationRoutes);
app.use('/api/staff', staffRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global Error:', err.stack);
  res.status(500).json({ message: 'Something went wrong. Please try again later.' });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
