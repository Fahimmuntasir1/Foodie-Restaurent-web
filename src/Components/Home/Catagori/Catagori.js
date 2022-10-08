import React from 'react';
import './Catagori.css';

const Catagori = () => {
    return (
        <section>
            <h2 className='title'>Top Categories</h2>
        <div className='flex catagory mt-11'>
            <div className='flex '>
                <h4>Fast Food</h4>
                <img src="./imgicon/3924824_12692-removebg-preview.png" alt="" />
            </div>
            <div className='flex'> 
                <h4>Desserts</h4>
                <img src="./imgicon/2desert.png" alt="" />
            </div>
            <div className='flex'>
                <h4>Fruit Item</h4>
                <img src="./imgicon/3frute.png" alt="" />
            </div>
            <div className='flex'>
                <h4>Vegetable</h4>
                <img src="./imgicon/4vegetable.png" alt="" />
            </div>
        </div>
        </section>
    );
};

export default Catagori;