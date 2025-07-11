import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = ["http://localhost:5173"];

app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allow us to parse incoming cookie

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port: ", PORT);
});
