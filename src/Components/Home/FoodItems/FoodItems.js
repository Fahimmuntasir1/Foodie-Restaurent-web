import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const FoodItems = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])
    return (
       <div>
      <div className="grid grid-cols-3 gap-7">
      {
        foods.slice(0,9).map(food => <Food food={food} id={food.id}></Food>)
       }
      </div>
       
      <div className='text-center my-9'>
      <button className='bg-orange-500 py-3 px-8 text-white hover:bg-transparent border-2 border-orange-500 hover:text-black duration-300'>More Items</button>
      </div>
       </div>
    );
};

export default FoodItems;