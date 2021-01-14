import React from 'react';

import './About.scss'



export default function About(){
    return(
        <div className="aboutContainer">
            <div className="aboutContainer__header">Um Verkefnið</div>
            <div className="aboutContainer__card">
                <div className="aboutContainer__card__header">Umhverfi</div>
                <div className="aboutContainer__card__text" > 
                    <p>Síðan er útfærð með React/Javascript fyrir frammenda.</p> 
                    <p>Þar sem verkefnið krafðist ekki gagnagrunns eða þungum fyrirspurnum er "bakendi" unninn í einni Javascript skrá sem sér um API köll.</p>
                    <p>Útlit er útfært með Sass</p>
                </div>
            </div>
            <div className="aboutContainer__card">
                <div className="aboutContainer__card__header">Virkni</div>
                <div className="aboutContainer__card__text" > 
                    <p>Síðan skiptis í tvær megin síður, leitarvél og upplýsingasíðu. </p>
                    <p>Leitarvélin sækir myndir í gegnum 'Google Custom Search API' sem skilar til baka myndum af 'Google.com' eftir leitarorði sem slegið er inn í leitargluggann. Þar sem ég er ekki með fullan aðgang að API-inu er aðeins hægt að sækja 10 myndir í einu kalli. Til að bæta upp fyrir það er hægt að sækja næstu 10 með því að smella á örvatakkana sem birtast fyrir ofan myndirnar ef fleiri myndir eru í boði.</p>
                    <p>Leitarvélin hefur tvö mismunandi útlit. Fyrra útlitið birtist þegar síðan er keyrð upp eða þegar flakkað er á milli síðna og seinna birtist þegar búið er að leita að myndum.</p>
                    <p>Síðan er ekki full testuð þannig ennþá er hægt að lenda í böggum :)</p>
                </div>
            </div>
            <div className="aboutContainer__card">
                <div className="aboutContainer__card__header">Hönnuður</div>
                <div className="aboutContainer__card__text" > 
                    <p>Ágúst Friðjónsson.</p>
                    <p>Email: agustfridjons@gmail.com</p>
                    <p>Github: <a href="https://github.com/agustfridjons">https://github.com/agustfridjons</a></p>
                </div>
            </div>
        </div>
    );
}

