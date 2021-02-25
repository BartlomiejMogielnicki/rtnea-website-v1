import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const navItems = [
  { label: 'O nas', path: '/' },
  { label: 'Muzyka', path: '/music' },
  { label: 'Foto&Video', path: '/photo' },
  { label: 'Dekoracje', path: '/decoration' },
  { label: 'Usługi', path: '/services' },
  { label: 'Galeria', path: '/gallery' },
  { label: 'Kontakt', path: '/contact' },
];

const StyledWrapper = styled.nav`
  height: 100%;
  width: 100%;
`;

const StyledList = styled.ul`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: space-evenly;
  color: #fff;
`;

const StyledListItem = styled.li`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;

  .active {
    border-bottom: 3px solid #fff;
  }
`;

const Navigation = () => (
  <StyledWrapper>
    <StyledList>
      {navItems.map((item) => (
        <StyledListItem key={item.label}>
          <Link to={item.path} activeClassName="active">
            {item.label}
          </Link>
        </StyledListItem>
      ))}
    </StyledList>
  </StyledWrapper>
);

export default Navigation;
