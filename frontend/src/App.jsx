import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import RecipeDetails from "../src/pages/RecipeDetails";
import Favourites from "../src/pages/Favourites";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Login />} />
          <Route path="/login" element={<About />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/RecipeDetails" element={<RecipeDetails />} />
          <Route path="/Favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
