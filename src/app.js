import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middlewares/errorMiddleware.js';
import connectDB from './config/db.js';

// Connect database
connectDB();

const app = express();

// External middlewares
app.use(cors());

// Express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route middlewares
app.use('/api/users', userRoutes);

// Error middleware
app.use(errorHandler);

export default app;
