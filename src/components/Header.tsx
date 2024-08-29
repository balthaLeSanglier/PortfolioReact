import React, { useEffect, useState } from 'react';
import { push as Menu } from 'react-burger-menu';
import '../styles/Header.css';

import { Typography, useMediaQuery } from '@mui/material';

const Header: React.FC = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const [small, setSmall] = useState<boolean>(false)
  const [menuClick, setMenuClick] = useState<boolean>(false)
  var lastScrollTop = 0;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      var st = window.scrollY || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      console.log("st : "+(st > lastScrollTop))
      if (!(st > lastScrollTop)) {
        var isHidden = window.scrollY > 200
        if(menuClick) {
          setSmall(false)
        }
        if(!menuClick) {
          setSmall(isHidden)
  
        }  
      } else {
     setSmall(false)
      } // else was horizontal scroll
      lastScrollTop = st // For Mobile or negative scrolling
      
    }
    );
  }, [])

  const handleMenuClick = () => {
    setMenuClick(true)
    setSmall(false)

    setTimeout(() => {
      setSmall(false)

      setMenuClick(false)
    }, 1000);
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