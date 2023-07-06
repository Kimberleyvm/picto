import React from 'react';

const CategoryList = () => {
    const categories = ['Dieren', 'Eten', 'Emoties', 'Activiteiten'];

    return(
        <div>
            <h2>Categorieën</h2>
            <ul>
                {categories.map((category, index) => (
                   <li key={index}>{category}</li> 
                ))}
            </ul>
        </div>
    );
};


export default CategoryList;