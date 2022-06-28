import React from 'react'
import { findAllInRenderedTree } from 'react-dom/test-utils'

const Categories = ({allCategories, filterItems}) =>{
    return (
        <div className='btn-container'>
            {allCategories.map((item, idx) => {
                return(
                    <button 
                    type='button'
                    className='filter-btn'
                    key={idx}
                    onClick={( ) => filterItems(item)}>
                    {item}
                    </button>
                )
            })}
        </div>
    )
}

export default Categories;
