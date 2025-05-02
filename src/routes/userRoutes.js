import express from 'express';
import protect from '../middlewares/authMiddleware.js';
import {
  getUsers,
  getUser,
  getMe,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

// Routes
router.route('/').get(protect, getUsers).post(createUser);

router.route('/me').get(protect, getMe);

router.route('/login').post(loginUser);

router
  .route('/:id')
  .get(protect, getUser)
  .put(protect, updateUser)
  .delete(protect, deleteUser);

export default router;
