import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <h1>Balthazar Muhlstein</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#about">A propos</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#work"></a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;