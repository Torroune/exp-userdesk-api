const getUsers = (req, res) => {
  res.status(200).json({ message: 'Get users' });
};

const getUser = (req, res) => {
  res.status(200).json({ message: 'Get user' });
};

const createUser = (req, res) => {
  res.status(200).json({ message: 'Add user' });
};

const loginUser = (req, res) => {
  res.status(200).json({ message: 'Login user' });
};

const updateUser = (req, res) => {
  res.status(200).json({ message: 'Update user' });
};

const deleteUser = (req, res) => {
  res.status(200).json({ message: 'Delete user' });
};

export { getUsers, getUser, createUser, loginUser, updateUser, deleteUser };
