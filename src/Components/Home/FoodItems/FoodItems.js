import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const FoodItems = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])
    return (
       <div>
       {
        foods.map(food => <Food food={food} id={food.id}></Food>)
       }
       </div>
    );
};

export default FoodItems;