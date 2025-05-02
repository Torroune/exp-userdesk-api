import express from 'express';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middlewares/errorMiddleware.js';
import connectDB from './config/db.js';

// Connect database
connectDB();

const app = express();

// Express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route middlewares
app.use('/api/users', userRoutes);

// Error middleware
app.use(errorHandler);

export default app;
