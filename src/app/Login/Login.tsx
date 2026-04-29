"use client";
import React from "react";

const Login = () => {
  return (
    <div className="h-screen w-full bg-gray-400 flex items-center justify-center">
      <form
        action=""
        className="w-[400px] bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Welcome Back</h2>

        <input
          type="text"
          placeholder="Enter your Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
        />
        <input
          type="password"
          placeholder="Enter your Password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
        />
        <button
          type="submit"
          className="w-full p-3 rounded-lg bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;