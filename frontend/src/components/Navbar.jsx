import axios from "axios";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout, setUser } from "../../slices/authSlice";
function Navbar() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    const res = await axios.get("http://localhost:5000/api/logout", {
      withCredentials: true,
    });
    const data = await res.data;
    if (data.success) {
      toast.success(data.message);
      dispatch(logout());
    }
  };
  const checkUser = async () => {
    const res = await axios.get("http://localhost:5000/api/checkUser", {
      withCredentials: true,
    });
    const data = await res.data;
    if (data.success) {
      dispatch(login())
      dispatch(setUser(data.user));
    }
  };
useEffect(()=>{
checkUser();
},[])
  return (
    <nav className="flex justify-between bg-white  lg:px-5 md:px-4 py-3 shadow-md ">
      <Link to="/" className="TITLE-TEXT text-xl text-red-500 font-bold">
        HomeChef
      </Link>
      <div className="flex gap-3 text-md justify-center items-center text-gray-600  ">
        <Link to="/About" className="hover:text-black">
          About
        </Link>
        {isAuth && <Link to="/favourites">Favourites</Link>}
        {isAuth ? (
          <li className="list-none cursor-pointer" onClick={handleLogout}>
            {" "}
            Logout
          </li>
        ) : (
          <Link to="/login"> Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
