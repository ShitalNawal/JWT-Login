import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import Header from "../Header/Header";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8880/signUp", {
        email,
        password,
      });
      console.log(response.data);
      // Redirect to sign-in page after successful sign-up
      navigate("/signIn");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300">
      <Header/>
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-sky-950">
            Sign up
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="text-sky-900 font-bold">
                Email address:
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none bg-slate-50 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sky-900 font-bold">
                Password:
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none bg-slate-50 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className=" text-sky-900 font-bold">
               Confirm Password:
              </label>
              <input
                id="password"
                name=" password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none bg-slate-50 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder=" confirm Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
    </main>
  );
};

export default SignUp;
