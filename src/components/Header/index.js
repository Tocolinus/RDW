import React from 'react';
import './style.scss';
import logoAcessaBr from '../../images/logo-acessaBR.svg'
import logoEbac from '../../images/logo-ebac.svg'
//import logoAcessaBr2 from '../../images/AcessaBR.png'

const Header = props => {

    return(
<header className="header__container">

    <div className="header__logo header__logo--state"> 
        <img src={logoAcessaBr} alt="Logo AcessaBR"/>
        <span className="header__city">
            / {props.city} - {props.state}
        </span>
    </div>

    <div className="header__logo header__logo--ebac"> 

        <span className="header__span">
                Apoio:
        </span>
        <img src={logoEbac} alt="Logo Ebac"/>
    </div>

</header>

    )
}

export default Header;