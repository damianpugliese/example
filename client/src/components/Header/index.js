import React from 'react';

const Header = ({ link1 }) => {
  return (
    <header>
      <img src="" alt="logo" />
      <nav className="nav-header">
        <a href="#" className="link">{link1}</a>
        <a href="#" className="link">Link 2</a>
        <a href="#" className="link">Link 3</a>
      </nav>
    </header>
  )
}

export default Header;
