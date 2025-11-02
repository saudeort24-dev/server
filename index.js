const express = require("express");
const cors = require("cors");
const connectDB = require("./config");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/users");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("WinFlix backend is running on Render!");
});
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Start the server on Render’s or local port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// Error handling for safety
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});
