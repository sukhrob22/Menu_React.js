import React from 'react'

const Menu = ({menuItems}) =>{
    // console.log(menuItems)
    return(
        <div className='section-center'>
            {menuItems.map(menuItem =>{
                const {category , price ,id, img, desc, title} = menuItem;

                return(
                    <article key={id} className='menu-item'>
                        <img src={img} alt={title} className='photo'></img>
                        <div className='itme-info'>
                            <header>
                                <h4>{title}</h4>
                                <h4 className='price'>${price}</h4>
                            </header>
                            <p className='item-text'> {desc}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default Menu;