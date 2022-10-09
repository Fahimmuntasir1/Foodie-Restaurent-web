import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      style={{
        backgroundImage: `url("https://image.shutterstock.com/image-photo/close-braised-beef-short-rib-260nw-530248354.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <nav className="w-[80%] mx-auto flex justify-between h-20 items-center  text-white">
        <div className="text-2xl font-bold">Foodie</div>
        <div className="flex">
        <ul className="flex mt-1">
          <li>
            <a
              className="hover:text-orange-500 duration-200 py-2 px-3 mr-3"
              href="/home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-orange-500 duration-200 py-2 px-3 mr-3"
              href="/about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:text-orange-500 duration-200 py-2 px-3 mr-3"
              href="/menu"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              className="hover:text-orange-500 duration-200 py-2 px-3 mr-3"
              href="/services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="hover:text-orange-500 duration-200 py-2 px-3 mr-3"
              href="/blogs"
            >
              Blogs
            </a>
          </li>
        </ul>
        <ul className="flex items-center justify-center">
          <li>
            <a className="" href="/cart">
              <FaShoppingCart className="hover:text-orange-500 text-2xl duration-200 mr-4" />
            </a>
          </li>
          <li>
            <a
              className="py-2 px-3 mr-3 bg-orange-500 hover:bg-orange-500/80 rounded-[30px] duration-200"
              href="/booking"
            >
              Book a Table
            </a>
          </li>
          <li>
            <Link to="/" >
              <img className="rounded-[50%] border-orange-500 border-4 hover:border-orange-500/80" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJJjceD7Xn1-ZIEoxBUHl1f0lFXIi6daOmQ&usqp=CAU" alt="" width={40} height={40} />
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
