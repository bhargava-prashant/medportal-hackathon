import express from "express";
import { signupDoctor, loginDoctor, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signupDoctor);

router.post("/login", loginDoctor);

router.post("/logout", logout);

export default router;
