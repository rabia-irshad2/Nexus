const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Import Route Files
const authRoutes = require("./routes/authRoutes");

// Load environment variables from .env file
dotenv.config();

const app = express();

// Connect to MongoDB Atlas Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Allows the server to accept and parse JSON data in request bodies

// Base Test Route
app.get("/", (req, res) => {
    res.send("Backend Running and connected to MongoDB");
});

// Mount Routers
app.use("/api/auth", authRoutes);

// Use the PORT variable from .env, or fallback to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});