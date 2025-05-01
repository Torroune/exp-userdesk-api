import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel';

const getUsers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get users' });
});

const getUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get user' });
});

const createUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Add user' });
});

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Login user' });
});

const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update user' });
});

const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Delete user' });
});

export { getUsers, getUser, createUser, loginUser, updateUser, deleteUser };
