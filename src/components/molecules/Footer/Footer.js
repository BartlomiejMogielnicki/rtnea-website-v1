import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledWrapper = styled.footer`
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  background-color: #000;
`;

const StyledSocial = styled.div`
  width: 175px;
  display: flex;
  justify-content: space-evenly;
  font-size: 1.5rem;
`;

const StyledCopyright = styled.p`
  color: #777;
  font-size: 0.8rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledWrapper>
      <h3>Rock The Night</h3>
      <p>
        <FontAwesomeIcon icon={faPhone} />
        602 013 743
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />
        rockthenight@example.com
      </p>
      <StyledSocial>
        <a href="#">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
      </StyledSocial>
      <StyledCopyright>Copyright &copy; {currentYear}</StyledCopyright>
    </StyledWrapper>
  );
};

export default Footer;
