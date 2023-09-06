import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URI);
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;