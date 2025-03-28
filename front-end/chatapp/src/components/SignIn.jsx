import React from "react";

function SignIn({authfun}) {

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-center text-2xl font-bold text-violet-700">Welcome Back!</h2>
        
        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-violet-700 font-medium">User Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 mt-1 border rounded-xl focus:ring focus:ring-violet-300 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-violet-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 mt-1 border rounded-xl focus:ring focus:ring-violet-300 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-violet-500 text-white p-3 rounded-xl font-semibold shadow-md hover:bg-violet-600 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-violet-600 font-medium hover:underline">
            <button onClick={authfun}>SignUp</button>
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
