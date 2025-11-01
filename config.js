const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // load .env file

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    console.log("Connecting to:", uri); // optional debug line

    await mongoose.connect(uri);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
