import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import videoBg from "../../../assests/Ejemplo de Food Reel.mp4";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="h-screen w-full"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.18)]"></div>
      <video src={videoBg} autoPlay loop muted />
      <nav className="absolute top-0 left-[10%] right-[10%] lg:w-[80%] md:w-[80%] h-24 mx-auto flex justify-between items-center text-white lg:text-xl md:text-xl text-2xl">
        <div className="text-3xl font-bold">Foodie</div>
        <div className="flex justify-center items-center ">
          <ul
            className={`lg:flex md:flex lg:static md:static items-center block text-center absolute z-10 left-0  ${
              open ? "top-[80px] duration-500 ease backdrop-blur-xl bg-black/30 w-full h-screen" : "top-[-260px]"
            }`}
          >
            <li>
              <Link
                className="underline-effect hover:text-orange-500 duration-200 py-2 px-3 mr-3"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="underline-effect hover:text-orange-500 duration-200 py-2 px-3 mr-3"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="underline-effect hover:text-orange-500 duration-200 py-2 px-3 mr-3"
                to="/menu"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                className="underline-effect hover:text-orange-500 duration-200 py-2 px-3 mr-3"
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="underline-effect hover:text-orange-500 duration-200 py-2 px-3 mr-3"
                to="/blogs"
              >
                Blogs
              </Link>
            </li>
          </ul>
          <ul className="flex items-center justify-center">
            <li>
              <Link
                to="/booking"
                className="py-2 px-3 mr-3 text-center hidden lg:block bg-orange-500 hover:bg-orange-500/75 rounded-[30px] duration-200"
              >
                Book a Table
              </Link>
            </li>
            <li>
              <Link className="" to="/cart">
                <FaShoppingCart className="hover:text-orange-500 text-2xl duration-200 mr-4" />
              </Link>
            </li>
            <li>
              <div className="dropdown dropdown-end">
                <label tabIndex="0">
                  <img
                    className="rounded-[50%] cursor-pointer border-orange-500 border-4 hover:border-orange-500/80"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJJjceD7Xn1-ZIEoxBUHl1f0lFXIi6daOmQ&usqp=CAU"
                    alt=""
                    width={40}
                    height={40}
                  />
                </label>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu mt-3 p-2 shadow bg-white rounded w-52"
                >
                  <li>
                    <Link
                      to="/"
                      className="text-gray-800  hover:text-orange-500 "
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-800  hover:text-orange-500 "
                    >
                      Log In
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="lg:hidden md:hidden">
              <Link onClick={() => setOpen(!open)} className="">
                {open ? (
                  <RiCloseFill className="text-3xl duration-200 ml-4" />
                ) : (
                  <RiMenu3Fill className="text-2xl duration-200 ml-4" />
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="absolute w-[80%] ml-auto mr-auto left-0 right-0 text-center top-[40%]">
      <h2 className="text-white lg:text-6xl text-4xl font-bold uppercase myFont">Family Owned. Locally Made. Community Focused.</h2> 
      <div className="flex  justify-center flex-wrap">
      <button className="text-white p-3 px-5 text-xl mr-3 bg-orange-500 mt-5 rounded hover:bg-orange-500/75">Book a Table</button>
      <button className="text-white p-3 px-5 text-xl bg-orange-500 mt-5 rounded hover:bg-orange-500/75">Order from Home</button>
      </div>
      </div>
    </header>
  );
};

export default Navbar;
