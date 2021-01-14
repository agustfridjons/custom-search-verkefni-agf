import React from 'react';

import './About.scss'



export default function About(){
    return(
        <div className="aboutContainer">
            <div className="aboutContainer__header">Um Verkefnið</div>
            <div className="aboutContainer__card">
                <div className="aboutContainer__card__header">Umhverfi</div>
                <div className="aboutContainer__card__text" > 
                    <p>Síðan er útfærð með React/Javascript fyrir framenda.</p> 
                    <p>Þar sem ekki var þörf fyrir Gagnagrunni eða þungum stórum fyrirspurnum er "bakendi" unnin í einu plane Javascript skrá sem sér um API köll.</p>
                    <p>Útlit er útfært með Sass</p>
                </div>
            </div>
            <div className="aboutContainer__card">
                <div className="aboutContainer__card__header">Virkni</div>
                <div className="aboutContainer__card__text" > 
                    <p>Síðan skiptis í tvær megin síður leitarvélina og upplýsinga síðu. </p>
                    <p>Leitarvélin sækir myndir í gegnum 'Google Custom Search API' sem skilar tilbaka myndum af 'Google.com' eftir leitarorði. Þar sem ég er ekki með fullan aðgang að API-inu gét ég aðeins sótt 10 myndir í einu kalli. Til að bæta upp fyrir það er hægt að sækja næstu 10 með því að smella á örvatakkana sem byrtast fyrir ofan myndirnar ef fleiri myndir eru í boði.</p>
                    <p>Leitarvélin hefur tvö mismunandi útlit. Fyrra byrtist first þegar síðan er keyrð upp eða þegar flakkað er á milli síðna. Hitt byrtist þegar búið er að leita að myndum.</p>
                    <p>Síðan er ekki full testuð þannig enþá er hægt að lenda í böggum :)</p>
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

