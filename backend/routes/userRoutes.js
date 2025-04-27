import express from 'express';
import { getProfile, login,logout,register } from '../controllers/userControllers.js';
const userRouter = express.Router();

userRouter.post('/login', login);
userRouter.post('/register', register);
userRouter.get('/profile', getProfile);
userRouter.post('/logout', logout);

export default userRouter;