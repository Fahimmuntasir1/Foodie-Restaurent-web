import React from 'react';
import UseFoodItems from '../../../Hooks/UseFoodItems';
import Food from '../Food/Food';

const Fruits = () => {
    const [foods] = UseFoodItems([]);
    const match = foods.filter((food) => food.category.includes("fruits"));
    console.log(match);
    return (
      <div className="grid grid-cols-3 gap-7 w-[80%] mx-auto ">
        {match.slice(0, 9).map((food) => (
          <Food food={food} id={food.id}></Food>
        ))}
      </div>
    );
};

export default Fruits;