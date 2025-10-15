import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="overlay">
        <nav className="navbar">
          <h1 className="logo">PetLife</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre o projeto</Link></li>
            <li><Link to="/petcare">Cuidados com o pet</Link></li>
            <li><Link to="/petdiary">Diário Pet</Link></li>
          </ul>
        </nav>

        <div className="header-content">
          <h2>Amor e cuidado para seu melhor amigo</h2>
          <p>Conheça dicas, registros e tudo sobre o bem-estar do seu pet.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;