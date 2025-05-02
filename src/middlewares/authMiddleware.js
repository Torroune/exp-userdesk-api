import jwt from 'jsonwebtoken';

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token invalid or expired' });
  }
};

export default protect;
