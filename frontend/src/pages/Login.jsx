import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiHeart } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, setUser } from "../../slices/authSlice";

function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:5000/api/login", {
      email,
      password,
    },
      { withCredentials: true, });
    const data = await res.data;
    if (data.success) {
      toast.success(data.message)
      dispatch(login());
      dispatch(setUser(data.user))
      navigate('/')
    }
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <form onSubmit={handleLogin}>
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transhtmlForm -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold">Login</h1>
                  <span className="text-base">Lets meet and eat together</span>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        required
                        autocomplete="off"
                        id="email"
                        name="email"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                        value={email}
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
                        value={password}
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
                        to="/signup"
                        className="text-green-500 hover:text-green-600 font-semibold"
                      >
                        Create an account
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

export default Login;
