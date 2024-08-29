import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import "../media.css";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
    email: "",
  });

  const [typeOfUser, setTypeOfUser] = useState("doctor");
  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs, typeOfUser);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 image-signup">
      <div className=" p-8 rounded-lg shadow-md w-full max-w-lg card mt-10 mb-20">
        <h1 className="text-2xl font-bold text-center mb-6">
          Choose Account Type
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-5 mb-8">
            <div
              className={`cursor-pointer p-4 border-2 rounded-lg ${
                typeOfUser === "doctor" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setTypeOfUser("doctor")}
            >
              <div
                className="w-20 h-20 object-cover mb-2 doctor-image"
                alt="Doctor"
              />
              <h2 className="text-center">Doctor</h2>
            </div>
            <div
              className={`cursor-pointer p-4 border-2 rounded-lg ${
                typeOfUser === "patient" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setTypeOfUser("patient")}
            >
              <div
                className="w-20 h-20 object-cover mb-2 patient-image"
                alt="Patient"
              />
              <h2 className="text-center">Patient</h2>
            </div>
          </div>
          {typeOfUser === "doctor" ? (
            <p className="text-center mb-4 text-gray-700">
              Please fill out the form below to get started
            </p>
          ) : (
            <p className="text-center mb-4 text-gray-700">
              Please fill out the form below to get started
            </p>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              <span>Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={inputs.fullName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              <span>Username</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="johndoe"
              value={inputs.username}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              <span>Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              value={inputs.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              <span>Sex</span>
            </label>
            <div className="flex items-center gap-4">
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  id="male"
                  onChange={handleInputChange}
                  checked={inputs.gender === "male"}
                  className="mr-2"
                />
                <label htmlFor="male" className="text-gray-700">
                  Male
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  id="female"
                  onChange={handleInputChange}
                  checked={inputs.gender === "female"}
                  className="mr-2"
                />
                <label htmlFor="female" className="text-gray-700">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              <span>Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={inputs.password}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              <span>Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={inputs.confirmPassword}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <Link
            to="/login"
            className="text-blue-500 hover:underline block mb-6 text-center"
          >
            Already have an account?
          </Link>

          <div>
            <button
              disabled={loading}
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:bg-gray-400"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
