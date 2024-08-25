import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import RecipeDetails from "../src/pages/RecipeDetails";
import Favourites from "../src/pages/Favourites";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import {Provider} from 'react-redux'
import { store } from "../redux/Store";
function App() {
  return (
    <>
<Provider store={store}>

      <BrowserRouter>
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/Favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
</Provider>
    </>
  );
}

export default App;
