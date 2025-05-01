import app from './src/app.js';

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.listen(PORT, () => {
  if (NODE_ENV === 'development') {
    console.log(
      `Server running at http://localhost:${PORT} in development mode`
    );
  } else {
    console.log(
      `Server running at http://localhost:${PORT} in production mode`
    );
  }
});
