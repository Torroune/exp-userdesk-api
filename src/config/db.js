import mongoose from 'mongoose';

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  try {
    const conn = await mongoose.connect(MONGO_URI);

    console.log(`MongoDB successfully connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
