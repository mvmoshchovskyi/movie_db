import React from 'react';
import {DarkThemeContext, isDarkTheme} from "../../context/DarkThemeContext";
import {Link} from 'react-router-dom';

import logo from '../../assets/logo512.png';

import './Header.scss';

export const Header = (props) => {


    return (
        <DarkThemeContext.Consumer>
            {(value) => {
                const {isDarkTheme, toggleTheme} = value
                return (
                    <div className="header navbar">
                        <div className="container">

                            <div>
                                <img src={logo} className="header-logo" alt="logotype"/>
                            </div>


                            <div className="header-links-wrapper">
                                {/*{*/}
                                {/*    links.map(item => {*/}
                                {/*        return (*/}
                                {/*            <div className="nav-item" key={item.url}>*/}
                                {/*                <Link to={item.url}*/}
                                {/*                      className="header-links-wrapper-link nav-link">{item.name}</Link>*/}
                                {/*            </div>*/}
                                {/*        );*/}
                                {/*    })*/}
                                {/*}*/}

                            </div>


                        </div>
                        <div>
                            <button className={`btn btn-primary ${isDarkTheme && 'dark' }`} onClick={toggleTheme}>Dark mode: {isDarkTheme ? 'on' : 'off'}</button>
                        </div>
                    </div>
                )
            }}

        </DarkThemeContext.Consumer>
    );
};


