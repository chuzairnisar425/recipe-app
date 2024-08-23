import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex justify-between bg-white  lg:px-5 md:px-4 py-3 shadow-md ">
      <Link to="/" className="TITLE-TEXT text-xl text-red-500 font-bold">
        HomeChef
      </Link>
      <div className="flex gap-3 text-md justify-center items-center text-gray-600  ">
        <Link to="/About" className="hover:text-black">
          About
        </Link>
        <Link to="/Login" className="hover:text-black">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
