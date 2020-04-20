import React from 'react';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper indigo lighten-2">
                <a href="/" className="brand-logo">Casa do codigo</a>
                <ul id="nav-mobile" className="right">
                    <li><a href="/Autores">Autores</a></li>
                    <li><a href="/Livros">Livros</a></li>
                    <li><a href="/Sobre">Sobre</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;