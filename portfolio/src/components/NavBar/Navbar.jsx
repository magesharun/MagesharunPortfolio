import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/mlogo.avif';
import { Link } from 'react-scroll';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' />
      <div className='desktopMenu'>
        <Link
          activeClass='active'
          to='intro'
          spy={true}
          smooth={true}
          offset={-180}
          duration={700}
          className='desktopMenuListItem'
        >
          Home
        </Link>
        <Link
          activeClass='active'
          to='skills'
          spy={true}
          smooth={true}
          offset={-100}
          duration={700}
          className='desktopMenuListItem'
        >
          About
        </Link>
        <Link
          activeClass='active'
          to='works'
          spy={true}
          smooth={true}
          offset={-100}
          duration={700}
          className='desktopMenuListItem'
        >
          Portfolio
        </Link>
        <Link
          activeClass='active'
          to='clients'
          spy={true}
          smooth={true}
          offset={-310}
          duration={700}
          className='desktopMenuListItem'
        >
          Clients
        </Link>
      </div>
      <div className='mobileMenu'>
        <IoIosMenu className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
          <Link
            activeClass='active'
            to='intro'
            spy={true}
            smooth={true}
            offset={-180}
            duration={700}
            className='listItem'
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass='active'
            to='skills'
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
            className='listItem'
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass='active'
            to='works'
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
            className='listItem'
            onClick={() => setShowMenu(false)}
          >
            Portfolio
          </Link>
          <Link
            activeClass='active'
            to='clients'
            spy={true}
            smooth={true}
            offset={-310}
            duration={700}
            className='listItem'
            onClick={() => setShowMenu(false)}
          >
            Clients
          </Link>
          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={-310}
            duration={700}
            className='listItem'
            onClick={() => setShowMenu(false)}
          >
            Contacts
          </Link>
        </div>
      </div>
      <button className='desktopMenuButton' onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>
        <FaPhoneAlt /> Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
