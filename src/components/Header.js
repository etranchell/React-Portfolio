import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Eric Tranchell</h1>
      <nav>
        <ul>
          <li>
            <a href='#about' className='active'>
              About Me
            </a>
          </li>
          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
          <li>
            <a href='#resume'>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
