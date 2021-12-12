import React from 'react';
import { FaBars } from 'react-icons/fa';
import { links } from './data';
import { useGlobal } from './context';

function Navbar() {
  const { openSidebar, openSubmenu } = useGlobal();

  const displayMenu = (e) => {
    const page = e.target.textContent;
    console.log(page);
    const tempLink = e.target.getBoundingClientRect();
    const center = (tempLink.left + tempLink.right) / 2;
    const bottom = tempLink.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <h3>classic_train</h3>
          <button className='bars' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-list'>
          <li>
            <a onMouseOver={displayMenu}>visit</a>
          </li>
          <li>
            <a onMouseOver={displayMenu}>exhibitions</a>
          </li>
          <li>
            <a onMouseOver={displayMenu}>art</a>
          </li>
        </ul>
        <button className='btn signup'>sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;
