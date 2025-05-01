import express from 'express';
import {
  getUsers,
  getUser,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

// Routes
router.route('/').get(getUsers).post(createUser);

router.route('/login').post(loginUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

export default router;
