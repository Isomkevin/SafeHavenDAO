import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import ussdRoutes from "./routes/ussdRoutes.js";
import './events/smsEventListener.js'; // Initialize the SMS event listener

const { urlencoded, json } = bodyParser;
const { connect } = mongoose;

const app = express();

// Updated CORS configuration
const corsOptions = {
  origin: ["google.com"], // Add your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: true,
  optionsSuccessStatus: 204,
};

// Apply CORS middleware to all routes
app.use(cors(corsOptions));

// CORS error handling middleware
app.use((err, req, res, next) => {
  if (err.name === "CORSError") {
    console.error("CORS Error:", err.message);
    res.status(403).json({
      error: "CORS Error",
      message:
        "The CORS policy for this site does not allow access from the specified Origin.",
      details: err.message,
    });
  } else {
    next(err);
  }
});

app.use(urlencoded({ extended: true }));
app.use(json());

const mongoUri = process.env.MONGO_URI || 'your-hardcoded-mongodb-uri-here';

connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error));

// Routes
app.use("/ussd", ussdRoutes);
app.get("/", (req, res) => {
  res.send("HELLO FROM HOMEPAGE")
});

// General error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Internal Server Error",
    message: "Something went wrong on the server.",
    details: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
