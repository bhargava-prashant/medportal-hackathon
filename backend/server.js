import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authPatientRoutes from "./routes/auth.patient.routes.js";
import authDoctorRoutes from './routes/auth.doctor.routes.js'

import connectToMongoDB from "./db/connectToMongoDB.js";

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
const app = express();
dotenv.config({
  path: "db/config.env"
});
app.use(cors());
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth/patient", authPatientRoutes);
app.use("/api/auth/doctor", authDoctorRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
