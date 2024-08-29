import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin.js";
import "../media.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [typeOfUser, setTypeOfUser] = useState("doctor");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({username, password, typeOfUser});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 image-login">
      <div className="card p-8 rounded-lg shadow-md w-full max-w-md">
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
              <span>Username</span>
            </label>
            <input
              type="text"
              placeholder="John doe"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              <span>Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <Link
            to="/signup"
            className="text-blue-500 hover:underline block mb-6 text-center"
          >
            Don&apos;t have an account?
          </Link>

          <div>
            <button
              disabled={loading}
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:bg-gray-400"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
