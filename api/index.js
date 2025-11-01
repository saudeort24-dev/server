const express = require("express");
const cors = require("cors");
const connectDB = require("../config");      // note ../ because file moved into api/
require("dotenv").config();

const productRoutes = require("../routes/productRoutes");
const authRoutes = require("../routes/authRoutes");
const userRoutes = require("../routes/users");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB (will run when the function cold-starts)
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("WinFlix backend deployed on Vercel!");
});
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// IMPORTANT: export the app — do NOT call app.listen()
module.exports = app;
// Error handler for unhandled rejections and uncaught exceptions
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

