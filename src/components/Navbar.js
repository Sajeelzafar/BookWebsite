import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const links = [
        {
          id: 1,
          path: "/books",
          text: "Books",
        },
        {
          id: 2,
          path: "/categories",
          text: "Categories",
        },
      ]
    return (
        <nav>
            <h1>Bookstore CMS</h1>
            <ul>
      {links.map(link => {
        return (
            <li key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          )
      })}
    </ul>
        </nav>
    )
}

export default Navbar