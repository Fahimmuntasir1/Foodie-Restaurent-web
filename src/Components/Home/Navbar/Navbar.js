import React from "react";

const Navbar = () => {
  return (
    <header
      style={{
        backgroundImage: `url("https://image.shutterstock.com/image-photo/close-braised-beef-short-rib-260nw-530248354.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <nav className="w-[80%] mx-auto flex justify-between h-screen pt-5 text-white">
        <div className="text-2xl font-bold">logo</div>
        <ul className="flex mt-1">
          <li>
            <a className="py-2 px-3 mr-3" href="/home">
              Home
            </a>
          </li>
          <li>
            <a className="py-2 px-3 mr-3" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="py-2 px-3 mr-3" href="/menu">
              Menu
            </a>
          </li>
          <li>
            <a className="py-2 px-3 mr-3" href="/services">
              Services
            </a>
          </li>
          <li>
            <a className="py-2 px-3 mr-3" href="/blogs">
              Blogs
            </a>
          </li>
        </ul>
        <ul className="flex">
          <li>
            <a className="py-2 px-3 mr-3" href="/blogs">
              Cart
            </a>
          </li>
          <li>
            <a className="py-2 px-3 mr-3" href="/blogs">
              Book a Table
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
