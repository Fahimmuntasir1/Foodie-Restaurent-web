import React from "react";
import { NavLink, Outlet } from "react-router-dom";
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
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive
              ? { backgroundColor: "#E6751F" }
              : { backgroundColor: "#ff74115d" }
          }
          className="flex items-center justify-center bg-[#ff74115d] hover:bg-orange-400 duration-200 p-[10px] lg:w-[160px] xl:p-[20px] xl:w-[200px] rounded-[7px] font-semibold text-[22px]"
        >
          <h4 className="hidden lg:block">Fast Food</h4>
          <img className="ml-[8px] h-[40px] w-[40px]" src={burger} alt="" />
        </NavLink>
        <NavLink
          to="/desserts"
          style={({ isActive }) =>
            isActive
              ? { backgroundColor: "#E6751F" }
              : { backgroundColor: "#ff74115d" }
          }
          className="flex items-center justify-center bg-[#ff74115d] hover:bg-orange-400 duration-200 p-[10px] lg:w-[160px] xl:p-[20px] xl:w-[200px] rounded-[7px] font-semibold text-[22px]"
        >
          <h4 className="hidden lg:block">Desserts</h4>
          <img className="ml-[8px] h-[40px] w-[40px]" src={desert} alt="" />
        </NavLink>
        <NavLink
          to="/drinks"
          style={({ isActive }) =>
            isActive
              ? { backgroundColor: "#E6751F" }
              : { backgroundColor: "#ff74115d" }
          }
          className="flex items-center justify-center bg-[#ff74115d] hover:bg-orange-400 duration-200 p-[10px] lg:w-[160px] xl:p-[20px] xl:w-[200px] rounded-[7px] font-semibold text-[22px]"
        >
          <h4 className="hidden lg:block">Drinks</h4>
          <img className="ml-[8px] h-[40px] w-[40px]" src={desert} alt="" />
        </NavLink>
        <NavLink
          to="/fruits"
          style={({ isActive }) =>
            isActive
              ? { backgroundColor: "#E6751F" }
              : { backgroundColor: "#ff74115d" }
          }
          className="flex items-center justify-center bg-[#ff74115d] hover:bg-orange-400 duration-200 p-[10px] lg:w-[160px] xl:p-[20px] xl:w-[200px] rounded-[7px] font-semibold text-[22px]"
        >
          <h4 className="hidden lg:block">Fruits</h4>
          <img className="ml-[8px] h-[40px] w-[40px]" src={frute} alt="" />
        </NavLink>
        <NavLink
          to="/vegetables"
          style={({ isActive }) =>
            isActive
              ? { backgroundColor: "#E6751F" }
              : { backgroundColor: "#ff74115d" }
          }
          className="flex items-center justify-center bg-[#ff74115d] hover:bg-orange-400 duration-200 p-[10px] lg:w-[160px] xl:p-[20px] xl:w-[200px] rounded-[7px] font-semibold text-[22px]"
        >
          <h4 className="hidden lg:block">Vegetable</h4>
          <img className="ml-[8px] h-[40px] w-[40px]" src={vegetable} alt="" />
        </NavLink>
      </div>
      <Outlet />
    </section>
  );
};

export default Category;
