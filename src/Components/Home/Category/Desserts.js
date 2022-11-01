import React from "react";
import UseFoodItems from "../../../Hooks/UseFoodItems";
import Food from "../Food/Food";

const Desserts = () => {
  const [foods] = UseFoodItems([]);
  const match = foods.filter((food) =>
    food.category.includes("dessert and sweets")
  );
  console.log(match);
  return (
    <div>
      <div className="grid grid-cols-3 gap-7 w-[80%] mx-auto ">
        {match.slice(0, 9).map((food) => (
          <Food food={food} id={food.id}></Food>
        ))}
      </div>
      <div className='text-center my-9'>
      <button className='text-white p-3 px-5 text-xl mr-3 bg-orange-500 mt-5 rounded hover:bg-orange-600'>Load More</button>
      </div>
    </div>
  );
};

export default Desserts;
