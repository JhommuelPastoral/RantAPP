import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './config/db.js';
import userRouter from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import rantRouter from './routes/rantRoutes.js';
import http from 'http';  // Import http here
import { Server } from 'socket.io';  // Use the named import from socket.io

const app = express();

// Create an HTTP server and pass it to Socket.IO
const server = http.createServer(app);

// Initialize Socket.IO with the server
const io = new Server(server, {
  cors: {
    origin: 'https://rant-0l5u.onrender.com',  // Replace with your frontend URL
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

app.use(cors({
  origin: 'https://rant-0l5u.onrender.com',  // Replace with your frontend URL
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
dotenv.config();

// Set up routes and pass io to the router
app.use('/api/users', userRouter);
app.use('/api/rants', rantRouter(io));

// Start the server
server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
  connectDb();
});
