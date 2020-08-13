import React from 'react';
import {Link} from 'react-router-dom';
// import {withRouter} from 'react-router';
// import {links} from "../../constants/index";
import logo from '../../assets/logo512.png';

import './Header.scss';

export const Header = (props) => {


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
        </div>
    );
};


