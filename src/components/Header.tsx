import React, { useEffect, useState } from 'react';
import { push as Menu } from 'react-burger-menu';
import '../styles/Header.css';

import { Typography, useMediaQuery } from '@mui/material';

const Header: React.FC = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const [small, setSmall] = useState<boolean>(false)
  useEffect(() => {

    window.addEventListener("scroll", () => {
      var isHidden = window.scrollY > 200
      setSmall(isHidden)
    }
    );
  }, [])
  if (!matches) {
    return (
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right>
        <a href="#Portrait">A propos</a>
        <a href="#Techs">Technologies</a>
        <a href="#Projects">Projets</a>
        <a href="#ComptencyTable">Tableau de compétence</a>
        <a href="#Contact">Contact</a>
      </Menu>
    )
  }
  return (
    <section>
      <header className='pinedHeader'>
        <div className="logo">
          <Typography variant='header' color={"text.primary"}>Balthazar Muhlstein</Typography>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#Portrait">
                <Typography variant="header">A propos</Typography>
              </a>
            </li>
            <li>
              <a href="#Techs">
                <Typography variant="header">Technologies</Typography>
              </a>
            </li>
            <li>
              <a href="#Projects">
                <Typography variant="header">Projets</Typography>
              </a>
            </li>
            <li>
              <a href="#ComptencyTable">
                <Typography variant="header">Tableau de compétence</Typography>
              </a>
            </li>
            <li>
              <a href="#Contact">
                <Typography variant="header">Contact</Typography>
              </a>
            </li>
          </ul>
        </nav>
        <nav className={`floatingHeader ${small ? 'appears' : 'hiddenMenu'}`}>
          <ul>
            <li>
              <a href="#Portrait">
                <Typography variant="header">A propos</Typography>
              </a>
            </li>
            <li>
              <a href="#Techs">
                <Typography variant="header">Technologies</Typography>
              </a>
            </li>
            <li>
              <a href="#Projects">
                <Typography variant="header">Projets</Typography>
              </a>
            </li>
            <li>
              <a href="#ComptencyTable">
                <Typography variant="header">Tableau de compétence</Typography>
              </a>
            </li>
            <li>
              <a href="#Contact">
                <Typography variant="header">Contact</Typography>
              </a>
            </li>
          </ul>
        </nav>
      </header>

    </section>
  );

};

export default Header;