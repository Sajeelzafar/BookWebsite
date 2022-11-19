import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/books',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <nav className="navBar">
      <div className="navLeftSide">
        <h1>
          <Link className="navBarHeading" to="/"> Bookstore CMS</Link>
        </h1>
        <ul className="navBarLinks">
          {links.map((link) => (
            <li key={link.id}>
              <Link className="navBarItem" to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="Oval">
        {' '}
        <FontAwesomeIcon className="userIcon" icon={faUser} />
      </div>

    </nav>
  );
};

export default Navbar;
