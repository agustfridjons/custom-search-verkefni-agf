import React from 'react';

import './Header.scss';

import { Link } from 'react-router-dom';


export default function Header() {
    return(
        <header className="header">
            <div className="header__content">
            <Link
                className="a"
                to={{
                    pathname: '/',
                }}
            >
                <div className="header__content__nav">Myndaleitavél</div>
            </Link>
            <Link
                className="a"
                to={{
                    pathname: '/about',
                }}
            >
                <div className="header__content__nav">Um verkefnið</div>
            </Link>
            </div>
        </header>
    );
}