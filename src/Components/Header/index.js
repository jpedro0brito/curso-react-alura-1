import React from 'react';
import LinkWrapper from '../../utils/LinkWrapper';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper indigo lighten-2">
                <LinkWrapper to="/" activeStyle={{}}  className="brand-logo">Casa do codigo</LinkWrapper>
                <ul id="nav-mobile" className="right">
                    <li><LinkWrapper to="/Autores">Autores</LinkWrapper></li>
                    <li><LinkWrapper to="/Livros">Livros</LinkWrapper></li>
                    <li><LinkWrapper to="/Sobre">Sobre</LinkWrapper></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;