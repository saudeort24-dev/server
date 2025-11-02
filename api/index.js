const express = require("express");
const cors = require("cors");
const connectDB = require("../config");
require("dotenv").config();

const productRoutes = require("../routes/productRoutes");
const authRoutes = require("../routes/authRoutes");
const userRoutes = require("../routes/users");

const app = express();

// ✅ Improved CORS setup
app.use(
  cors({
    origin: [
      "https://winflix-frontend2.vercel.app", // your deployed frontend
      "http://localhost:3000", // for local development
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ Connect to DB
connectDB();

// ✅ Routes
app.get("/", (req, res) => {
  res.send("WinFlix backend deployed on Vercel!");
});

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// ✅ Export app (no app.listen for Vercel)
module.exports = app;

// ✅ Error handlers (keep these)
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});
