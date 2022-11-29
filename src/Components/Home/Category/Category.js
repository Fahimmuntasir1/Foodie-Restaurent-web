import React from "react";
import { Link, Outlet } from "react-router-dom";
import burger from "../../../assests/burger.png";
import desert from "../../../assests/desert.png";
import frute from "../../../assests/frute.png";
import vegetable from "../../../assests/vegetable.png";

const Category = () => {
  return (
    <section className="w-[80%] mx-auto mt-20">
      <h2 className="title text-[26px] font-semibold text-orange-500">
        Top Categories
      </h2>
      <div className="flex w-[100%] text-center category justify-between mt-6 mb-20">
        <Link
          to="/fastFood"
          className="flex bg-[#ff74115d] hover:bg-orange-400 duration-200 items-center justify-center p-[20px] w-[200px] rounded-[7px] font-semibold text-[22px]"
        >
          <h4>Fast Food</h4>
          <img className="ml-[8px] h-[40px] w-[40px]" src={burger} alt="" />
        </Link>
        <Link
          to="/desserts"
          className="flex bg-[#ff74115d] hover:bg-orange-400 duration-200 items-center justify-center p-[20px] w-[200px] rounded-[7px] font-semibold text-[22px]"
        >
          <h4>Desserts</h4>
          <img className="ml-[8px] h-[40px] w-[40px]" src={desert} alt="" />
        </Link>
        <Link
          to="/drinks"
          className="flex bg-[#ff74115d] hover:bg-orange-400 duration-200 items-center justify-center p-[20px] w-[200px] rounded-[7px] font-semibold text-[22px]"
        >
          <h4>Drinks</h4>
          <img className="ml-[8px] h-[40px] w-[40px]" src={desert} alt="" />
        </Link>
        <Link
          to="/fruits"
          className="flex bg-[#ff74115d] hover:bg-orange-400 duration-200 items-center justify-center p-[20px] w-[200px] rounded-[7px] font-semibold text-[22px]"
        >
          <h4>Fruits</h4>
          <img className="ml-[8px] h-[40px] w-[40px]" src={frute} alt="" />
        </Link>
        <Link
          to="/vegetables"
          className="flex bg-[#ff74115d] hover:bg-orange-400 duration-200 items-center justify-center p-[20px] w-[200px] rounded-[7px] font-semibold text-[22px]"
        >
          <h4>Vegetable</h4>
          <img className="ml-[8px] h-[40px] w-[40px]" src={vegetable} alt="" />
        </Link>
      </div>
      <Outlet />
    </section>
  );
};

export default Category;
