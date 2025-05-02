import jwt from 'jsonwebtoken';

const generateToken = (userId) => {
  const JWT_SECRET = process.env.JWT_SECRET;

  return jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: '7d',
  });
};

export default generateToken;
