import React from 'react';

import LogoHead from '../../assets/images/icons/logohead.svg';

function Home() {
    return(
        <div id="page-home">
            <div id="page-home-content" className="container">
                <div id="page-header" className="nav-header">
                    <img src={LogoHead} className="logo-head" alt="logohead" />
                </div>

            </div>
        </div>
    )

}

export default Home;