import { useEffect, useState } from 'react';

const UseFoodItems = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])
    return [foods, setFoods]
};

export default UseFoodItems;