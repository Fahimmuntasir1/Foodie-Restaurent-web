import React from "react";
import "./Category.css";
import burger from "../../../assests/burger.png";
import desert from "../../../assests/desert.png";
import frute from "../../../assests/frute.png";
import vegetable from "../../../assests/vegetable.png";
const Category = () => {
  return (
    <section>
      <h2 className="title text-[26px] font-semibold ml-[240px] mt-[100px] text-orange-500">
        Top Categories
      </h2>
      <div className="flex category justify-center mt-11">
        <div className="flex bg-[#ffa60064] h-[70px] ml-[40px] p-[20px] w-[200px] rounded-[7px] font-semibold text-[22px]">
          <h4>Fast Food</h4>
          <img className="ml-[8px] h-[30px] w-[30px]" src={burger} alt="" />
        </div>
        <div className="flex bg-[#ffa60064] h-[70px] ml-[40px] p-[20px] w-[200px] rounded-[7px] font-semibold text-[22px]">
          <h4>Desserts</h4>
          <img className="ml-[8px] h-[30px] w-[30px]" src={desert} alt="" />
        </div>
        <div className="flex bg-[#ffa60064] h-[70px] ml-[40px] p-[20px] w-[200px] rounded-[7px] font-semibold text-[22px]">
          <h4>Fruit Item</h4>
          <img className="ml-[8px] h-[30px] w-[30px]" src={frute} alt="" />
        </div>
        <div className="flex bg-[#ffa60064] h-[70px] ml-[40px] p-[20px] w-[200px] rounded-[7px] font-semibold text-[22px]">
          <h4>Vegetable</h4>
          <img className="ml-[8px] h-[30px] w-[30px]" src={vegetable} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Category;
