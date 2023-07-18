import React from 'react';

const Navigation = ({ currentPage, handlePageChange }) => {
  return (
    <nav>
      <ul>
        <li>
          <a
            href='#about'
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'active' : ''}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href='#project'
            onClick={() => handlePageChange('Project')}
            className={currentPage === 'Project' ? 'active' : ''}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href='#contact'
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'active' : ''}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href='#resume'
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'active' : ''}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
