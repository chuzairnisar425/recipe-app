import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiHeart } from "react-icons/hi2";

function Signup() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSignup = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <form onSubmit={handleSignup} >
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transhtmlForm -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold">Signup</h1>
                  <span className="text-base">Lets meet and eat together</span>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autocomplete="off"
                        id="username"
                        name="username"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Username "
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <label
                        htmlFor="username"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Username{" "}
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autocomplete="off"
                        id="email"
                        name="email"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email Address
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autocomplete="off"
                        id="password"
                        name="password"
                        type="password"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Password
                      </label>
                    </div>
                    <div className="relative">
                      <button className="bg-green-500 hover:bg-green-600 duration-500 text-white rounded-md px-2 py-1">
                        Submit
                      </button>
                    </div>
                    <div className="text-xs flex gap-2">
                      <span> Or</span>
                      <Link
                        to="/login"
                        className="text-green-500 hover:text-green-600 font-semibold"
                      >
                        Already have an account
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-600 text-xs m-auto w-[250px] mt-10">
            <p className="flex justify-center gap-1 items-center">
              &copy; 2024 Made with <HiHeart className="text-red-500" /> from
              Uzair
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
