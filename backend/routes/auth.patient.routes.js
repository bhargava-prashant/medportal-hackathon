import express from "express";
import { signupPatient, loginPatient, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signupPatient);

router.post("/login", loginPatient);

router.post("/logout", logout);

export default router;
