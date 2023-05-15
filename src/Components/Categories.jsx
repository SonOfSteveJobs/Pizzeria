import React, {useState} from 'react';

const Categories = ({categories}) => {
    const [active, setActive] = useState(0);

    const changeActiveIndex = (index) => {
        setActive(index);
    }
    return(
        <div className="categories">
            <ul>
                {categories.map((category, i) => <li
                    key={i}
                    className={i === active ? "active" : ""}
                    onClick={() => changeActiveIndex(i)}>
                    {category}
                </li>)}
            </ul>
        </div>
    );
};

export default Categories;