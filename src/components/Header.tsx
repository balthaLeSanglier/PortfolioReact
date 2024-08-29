import React, { useEffect, useState } from 'react';
import { push as Menu } from 'react-burger-menu';
import '../styles/Header.css';

import { Typography, useMediaQuery } from '@mui/material';

const Header: React.FC = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const [small, setSmall] = useState<boolean>(false)
  const [menuClick, setMenuClick] = useState<boolean>(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      var isHidden = window.scrollY > 200
      if(menuClick) {
        setSmall(false)
      }
      if(!menuClick) {
        setSmall(isHidden)

      }
      console.log("smallScroll "+small)

    }
    );
  }, [])

  const handleMenuClick = () => {
    setMenuClick(true)
    setSmall(false)
    console.log("smallClick "+small)

    setTimeout(() => {
      setSmall(false)

      setMenuClick(false)
      console.log("menuClick "+menuClick);
      console.log("menuSmall "+small)
    }, 1000);
    console.log("smallClick "+small)

  }
  if (!matches) {
    return (
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right>
        <a href="#Portrait" onClick={() => setMenuClick(true)}>A propos</a>
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
        <nav className={`floatingHeader ${small && !menuClick ? 'appears' : 'hiddenMenu'}`}>
          <ul>
            <li>
              <a href="#Portrait"  onClick={() => handleMenuClick()}>
                <Typography variant="header">A propos</Typography>
              </a>
            </li>
            <li>
              <a href="#Techs">
                <Typography  onClick={() => handleMenuClick()} variant="header">Technologies</Typography>
              </a>
            </li>
            <li>
              <a href="#Projects">
                <Typography  onClick={() => handleMenuClick()} variant="header">Projets</Typography>
              </a>
            </li>
            <li>
              <a href="#ComptencyTable">
                <Typography  onClick={() => handleMenuClick()} variant="header">Tableau de compétence</Typography>
              </a>
            </li>
            <li>
              <a href="#Contact">
                <Typography onClick={() => handleMenuClick()} variant="header">Contact</Typography>
              </a>
            </li>
          </ul>
        </nav>
      </header>

    </section>
  );

};

export default Header;