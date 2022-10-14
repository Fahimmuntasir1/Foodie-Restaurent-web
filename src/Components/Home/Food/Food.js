import React from 'react';

const Food = ({food}) => {
    const {title, url} = food
    return (
        <div>
            <img src={url} alt="foodImg"/>
        </div>
    );
};

export default Food;