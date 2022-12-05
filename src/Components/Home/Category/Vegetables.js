import React from "react";
import { Link } from "react-router-dom";
import UseFoodItems from "../../../Hooks/UseFoodItems";
import Food from "../Food/Food";

const Vegetables = () => {
  const [foods] = UseFoodItems([]);
  const match = foods.filter((food) => food.category.includes("vegetable"));

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 mx-auto">
        {match.slice(0, 9).map((food) => (
          <Food food={food} key={food._id}></Food>
        ))}
      </div>
      <div className="text-center my-9">
        <Link to="/">
          <button className="text-white p-3 px-5 text-xl mr-3 bg-orange-500 mt-5 rounded hover:bg-orange-600">
            Load More
          </button>
        </Link>
      </div>
    </>
  );
};

export default Vegetables;
