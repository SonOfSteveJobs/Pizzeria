import React, {useEffect, useState} from 'react';
import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import {Skeleton} from '../Components/PizzaBlock/Placeholder';
import PizzaBlock from '../Components/PizzaBlock/PizzaBlock';

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetch('https://6458ae534eb3f674df7a1fde.mockapi.io/items')
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, []);


    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return (
        <>
            <div className="content__top">
                <Categories categories={categories}/>
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(8)].map((_, i) => <Skeleton key={i}/>)
                        : items.map((pizza, i) => <PizzaBlock key={i} pizza={pizza}/>)
                }
            </div>
        </>
    );
};

export default Home;