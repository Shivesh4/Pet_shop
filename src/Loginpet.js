import React from "react";
import App from "./App.css";
import logo from "../src/Nav_logo.jpg";

function Loginpet() {
  const count = 0;
  return (
    <>
      <nav class="flex justify-between w-10/12  mx-auto items-center border-0 border-gray-700 border-solid border-b pb-4">
        <img src={logo} alt="Logo"></img>
        <a href="#" class="text-white mx-4">
          Shop
        </a>
        <a href="#" class="text-white mx-4">
          Collection
        </a>
        <a href="#" class="text-white mx-4">
          Featured
        </a>
        <a href="#" class="text-white mx-4">
          Blog
        </a>
        <a href="#" class="text-red-700 mx-4">
          Sign In
        </a>
        <div className="relative ">
          <a href="#" class="text-white mx-4">
            Cart
          </a>
          <div className="absolute top-0 right-0 bg-white rounded-full text-black flex items-center justify-center">
            {count}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Loginpet;
