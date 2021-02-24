import React from 'react';
import { Link } from 'gatsby';

const navItems = [
  { label: 'Start', path: '/' },
  { label: 'Muzyka', path: '/music' },
  { label: 'Foto&Video', path: '/photo' },
  { label: 'Dekoracje', path: '/decoration' },
  { label: 'Usługi', path: '/services' },
  { label: 'Galeria', path: '/gallery' },
  { label: 'Kontakt', path: '/contact' },
];

const Navigation = () => (
  <nav>
    <ul>
      {navItems.map((item) => (
        <li key={item.label}>
          <Link to={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
