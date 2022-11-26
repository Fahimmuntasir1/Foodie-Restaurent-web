import React from "react";
import UseFoodItems from "./UseFoodItems";

const UseAllFoodItems = () => {
  const [foods] = UseFoodItems([]);
  const match = foods.filter((food) => food.category.includes("drink"));
  return (
    <div className="grid grid-cols-3 gap-7 mx-auto ">
      {match.slice(0, 9).map((food) => (
        <>
          <h2>{food.price}</h2>
        </>
      ))}
    </div>
  );
};

export default UseAllFoodItems;
