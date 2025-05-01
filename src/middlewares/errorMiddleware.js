const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode ? err.statusCode : 500;
  const errText = statusCode < 500 ? 'Client error' : 'Internal server error';
  const errMessage = err.message || 'An error occurred';

  const NODE_ENV = process.env.NODE_ENV;

  // Log error
  console.error(`${errText}: ${errMessage}`);

  if (NODE_ENV === 'development') {
    res
      .status(statusCode)
      .json({ error: errText, message: errMessage, stack: err.stack });
  } else {
    res.status(statusCode).json({ error: errText, message: errMessage });
  }
};

export default errorHandler;
