import React from 'react';

import './ResultGrid.scss';

export default function ResultGrid(props){
    const { items } = props;

    return(
        
        <div className="grid">
            {items && items.map((item, i) => {
                return(
                    <div className="grid__item" key={i}>
                        <img className="grid__item__img" src={item.link} alt={item.title} title={item.title} />
                    </div>
                );
            })}
        </div>
    )

}