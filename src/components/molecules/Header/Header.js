import React from 'react';
import styled from 'styled-components';
import Navigation from '../../atoms/Navigation/Navigation';
import MusicPlayer from '../../atoms/MusicPlayer/MusicPlayer';

const StyledHeader = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Header = () => (
  <StyledHeader>
    <Navigation />
    <MusicPlayer />
  </StyledHeader>
);

export default Header;
