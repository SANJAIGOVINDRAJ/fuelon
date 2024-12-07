import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    role === "student" ? navigate("/student/home") : navigate("/trainee/home");
  };

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Signup Button */}
      <div className="flex justify-end w-full p-4">
        <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
          Signup
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between lg:gap-10 w-full lg:w-3/4 mx-auto p-4">
        {/* Welcome Section */}
        <div className="flex  flex-col lg:pt-10  items-center  text-center gap-4 lg:w-1/2">
          <h1 className="text-3xl  font-boo lg:text-4xl text-center text-gray-800 font-semibold">Welcome!</h1>
          <h3 className="text-xl  lg:text-3xl text-center text-gray-800 font-semibold">
            Login to your account
          </h3>
          <div className="w-48 md:w-64 lg:mt-14 lg:w-[400px]">
            <img
              src="/loginPageImage.png"
              alt="Login Page"
              className="w-full rounded-3xl h-auto object-contain"
            />
          </div>
        </div>

        {/* Login Form */}
        <div className="border  p-10 md:p-10 w-full lg:w-[508px] rounded-2xl shadow-lg bg-white">
          <form className='' onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className=" mb-5">
              <label htmlFor="email" className="block font-boo  mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                value="biyan12542@biowey.com"  // Resolved conflict here
                className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="sahil@gmail.com"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-5">
              <label htmlFor="password" className="block font-boo  mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                value="12334345345"
                id="password"
                className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>

            {/* Role Dropdown */}
            <div className="mb-5">
              <label htmlFor="role" className="block font-boo  mb-2 text-sm font-medium text-gray-900">
                Role
              </label>
              <select
                name="role"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              >
                <option value="trainee">Trainee</option>
                <option value="student">Student</option>
              </select>
            </div>

            {/* Forgot Password and Login Button */}
            <div className="flex justify-between items-center mb-5">
              <button className="text-gray-500 hover:text-blue-500">
                Forgot Password?
              </button>
              <button
                type="submit"
                className="px-6 py-2  rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Login
              </button>
            </div>

            {/* Social Login */}
            <div className="flex flex-col items-center gap-4">
              <p className=' font-boo'>Login With</p>
              <div className="flex justify-center gap-4">
                <button>
                  <img
                    src="/facebookLogo.png"
                    alt="Facebook Logo"
                    className="w-10 h-10 object-contain"
                  />
                </button>
                <button>
                  <img
                    src="/GoogleLogo.png"
                    alt="Google Logo"
                    className="w-10 h-10 object-contain"
                  />
                </button>
                <button>
                  <img
                    src="/linkedinLogo.png"
                    alt="LinkedIn Logo"
                    className="w-10 h-10 object-contain"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
