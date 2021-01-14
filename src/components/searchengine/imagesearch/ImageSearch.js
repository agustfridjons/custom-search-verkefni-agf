import React, { useState } from 'react';

import IconB from '../../../images/icon1.svg'
import IconW from '../../../images/icon2.svg'

import './ImageSearch.scss';

export default function ImageSearch(props){
    const { value, onChange, onSubmit, className } = props;

    // Determines wich icon (black or white magnifying glass) should be displayed  

    return(
        <form className={className} onSubmit={onSubmit}>
            <label className={`${className}__label`} for="searchkey">Myndaleit</label>
            <div className={`${className}__bar`}>
                <input 
                    className={`${className}__bar__input`} 
                    type="text" 
                    value={value} 
                    onChange={onChange} 
                    name="searchkey" 
                    placeholder="Leitarorð"
                />
                <span className={`${className}__bar__searchButton`} onClick={onSubmit}>
                    <img src={className === 'formV1' ? IconW : IconB} alt="magnifying glass" />
                </span>
            </div>
        </form>
    )

}
