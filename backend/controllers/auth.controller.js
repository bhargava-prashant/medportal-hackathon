import bcrypt from "bcryptjs";
import Doctor from "../models/doctor.model.js";
import Patient from "../models/patient.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const loginDoctor = async (req, res) => {
  try {
    const { username, password} = req.body;
    const doctor = await Doctor.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      doctor?.password || ""
    );
    if (!doctor || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    generateTokenAndSetCookie(doctor._id, res);

    res.status(200).json({
      _id: doctor._id,
      fullName: doctor.fullName,
      username: doctor.username,
      profilePic: doctor.profilePic,
    });
  } catch (err) {
    console.log("Error in Doctor Login Controller: ", err.message);
  }
};
export const loginPatient = async (req, res) => {
  try {
    const { username, password} = req.body;
    const patient = await Patient.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      patient?.password || ""
    );
    if (!patient || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    generateTokenAndSetCookie(patient._id, res);

    res.status(200).json({
      _id: patient._id,
      fullName: patient.fullName,
      username: patient.username,
      profilePic: patient.profilePic,
    });
  } catch (err) {
    console.log("Error in Patient Login Controller: ", err.message);
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    console.log("Error in logout controller", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const signupDoctor = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender, email } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }
    const doctor = await Doctor.findOne({ username });

    if (doctor) {
      return res.status(400).json({ error: "Username already exists" });
    }
 
    // HASH PASSWORD HERE
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newDoctor = new Doctor({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
      email
    });

    if (newDoctor) {
      //Generate JWT Token here
      generateTokenAndSetCookie(newDoctor._id, res);

      await newDoctor.save();

      res.status(201).json({
        _id: newDoctor._id,
        fullName: newDoctor.fullName,
        username: newDoctor.username,
        profilePic: newDoctor.profilePic,
        email: newDoctor.email,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (err) {
    console.log("Error in Doctor Signup Controller", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const signupPatient = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender, email } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }
    const patient = await Patient.findOne({ username });

    if (patient) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // HASH PASSWORD HERE
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newPatient = new Patient({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
      email,
    });

    if (newPatient) {
      //Generate JWT Token here
      generateTokenAndSetCookie(newPatient._id, res);

      await newPatient.save();

      res.status(201).json({
        _id: newPatient._id,
        fullName: newPatient.fullName,
        username: newPatient.username,
        profilePic: newPatient.profilePic,
        gender,
        email
      });
    } else {
      res.status(400).json({ error: "Invalid patient data" });
    }
  } catch (err) {
    console.log("Error in Patient Signup Controller", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
