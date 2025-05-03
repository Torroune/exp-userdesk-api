import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc    Get all Users
// @route   POST /api/users
// @access  Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password');

  res.status(200).json({ success: true, data: users });
});

// @desc    Get a User
// @route   POST /api/users
// @access  Private
const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id).select('-password');

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json({ success: true, data: user });
});

// @desc    Get Current User
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  const { id } = req.user;

  const user = await User.findById(id).select('-password');

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json({ success: true, data: user });
});

// @desc    Create a User
// @route   POST /api/users
// @access  public
const createUser = asyncHandler(async (req, res) => {
  const { fullname, username, email, password } = req.body;

  if (!fullname || !username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const existingUserUsername = await User.findOne({ username });
  const existingUserEmail = await User.findOne({ email });

  if (existingUserUsername || existingUserEmail) {
    return res.status(400).json({ error: 'User already exists' });
  }

  // Encrypt password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const createdUser = await User.create({
    fullname,
    username,
    email,
    password: hashedPassword,
  });

  const { password: _, ...userData } = createdUser.toObject();

  res.status(201).json({
    success: true,
    message: 'User successfully created',
    data: userData,
  });
});

// @desc    Login a User
// @route   POST /api/users/login
// @access  public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Verify password
  const isVerified = await bcrypt.compare(password, existingUser.password);

  if (!isVerified) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  // Generate
  const token = generateToken(existingUser._id);

  const { password: _, ...userData } = existingUser.toObject();

  res.status(200).json({
    success: true,
    message: 'User successfully logged in',
    token,
    data: userData,
  });
});

// @desc    Update a User
// @route   DELETE /api/users/:id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { fullname, username, email, password } = req.body;

  if (!fullname || !username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
    _id: { $ne: id },
  });

  if (existingUser) {
    return res.status(400).json({ error: 'Username or email already in use' });
  }

  // Encrypt password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.findByIdAndUpdate(
    id,
    {
      fullname,
      username,
      email,
      password: hashedPassword,
    },
    { runValidators: true, new: true }
  ).select('-password');

  if (!user) {
    return res.status(400).json({ error: 'User not found' });
  }

  res
    .status(200)
    .json({ success: true, message: 'User successfully updated', data: user });
});

// @desc    Delete a User
// @route   DELETE /api/users/:id
// @access  Private
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedUser = await User.findByIdAndDelete(id);

  if (!deletedUser) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json({ success: true, message: 'User successfully deleted' });
});

export {
  getUsers,
  getUser,
  getMe,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
};
