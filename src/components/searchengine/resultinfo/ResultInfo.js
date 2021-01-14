import React from 'react';

import './ResultInfo.scss';

export default function ResultInfo(props){
    const { total, start, onInc, onDec } = props;

    const showDec = 0 < start;
    const showInc = start+10 < total;

    return(
        <div className="countContainer"> 
            <div className="countContainer__total">{total} myndir fundust !</div>
            <div className="countContainer__counter">
                {`Sýni myndir `} 
                {showDec && 
                    <span className="countContainer__counter__arr" onClick={onDec}>{' <'}</span>}
                {` ${start+1}-${start+10} `}
                {showInc && 
                    <span className="countContainer__counter__arr" onClick={onInc}>{' >'}</span>}
            </div>
        </div>    
    );

}