import React from "react";
import axios from 'axios';
import { useState } from 'react'
import { signUp } from '../api/auth'

function SignUp({ authfun }) {

  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [phone, setPhone] = useState('');
  let [password, setPassword] = useState('');
  // let [message, setMessage] = useState('')


  async function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      username,
      email,
      phone,
      password
    };


    console.log("Submitting Data:", userData);


    try {
      await signUp(userData);
      alert('user signup successful')

    } catch (error) {
      console.error("Signup Error:", error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-center text-2xl font-bold text-violet-700">Create an Account</h2>

        <form className="mt-6" onSubmit={handleSubmit} >
          <div className="mb-4">
            <label className="block text-violet-700 font-medium">User Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 mt-1 border rounded-xl focus:ring focus:ring-violet-300 outline-none"
              onChange={(e) => { setUsername(e.target.value) }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-violet-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-1 border rounded-xl focus:ring focus:ring-violet-300 outline-none"
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-violet-700 font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-3 mt-1 border rounded-xl focus:ring focus:ring-violet-300 outline-none"
              onChange={(e) => { setPhone(e.target.value) }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-violet-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 mt-1 border rounded-xl focus:ring focus:ring-violet-300 outline-none"
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-violet-500 text-white p-3 rounded-xl font-semibold shadow-md hover:bg-violet-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-violet-600 font-medium hover:underline">
            <button onClick={authfun}>SignIn</button>
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
