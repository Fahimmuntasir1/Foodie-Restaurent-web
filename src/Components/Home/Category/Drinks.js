import React from "react";
import { Link } from "react-router-dom";
import UseFoodItems from "../../../Hooks/UseFoodItems";
import Food from "../Food/Food";

const Drinks = () => {
  const [foods] = UseFoodItems([]);
  const match = foods.filter((food) => food.category.includes("drink"));
  return (
    <>
      <div className="grid grid-cols-3 gap-7 mx-auto ">
        {match.slice(0, 9).map((food) => (
          <Food food={food} id={food._id}></Food>
        ))}
      </div>
      <div className="text-center my-9">
        <Link className="text-white p-3 px-5 text-xl mr-3 bg-orange-500 mt-5 rounded hover:bg-orange-600">
          Load More
        </Link>
      </div>
    </>
  );
};

export default Drinks;
