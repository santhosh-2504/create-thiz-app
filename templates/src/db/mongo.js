// Optional MongoDB connector for THIZ apps.
// Delete this file if you're using PostgreSQL, MySQL, Prisma, or another DB.


import mongoose from "mongoose";

const connectMongoDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.warn("MONGO_URI is missing in your .env file.");
    console.warn("Skipping database connection...");
    console.warn("Add MONGO_URI=your_connection_string in .env");
    return; // Do NOT crash
  }

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    console.warn("Server is running without DB connection.");
  }
};

export default connectMongoDB;