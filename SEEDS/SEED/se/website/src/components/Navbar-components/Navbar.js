import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/Home' className='navbar-logo' onClick={closeMenu}>
            SEED
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Home' className='nav-links' onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Upload'
                className='nav-links'
                onClick={closeMenu}
              >
                Upload
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Search'
                className='nav-links'
                onClick={closeMenu}
              >
                Search
              </Link>
            </li>
             <li className='nav-item'>
              <Link
                to='/AdvanceSearch'
                className='nav-links'
                onClick={closeMenu}
              >
                Advance Search
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;