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
       <div className="grid grid-cols-3 gap-7">
       {
        foods.slice(0,9).map(food => <Food food={food} id={food.id}></Food>)
       }
       </div>
    );
};

export default FoodItems;