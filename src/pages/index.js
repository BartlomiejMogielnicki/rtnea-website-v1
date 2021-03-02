import React from 'react';
import Layout from '../layout/layout';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

const StyledWrapper = styled.div`
  min-height: calc(100vh - 80px);
  display: grid;
  grid-template-rows: 0.3fr 0.5fr 0.2fr;
  justify-items: center;
  text-align: center;
`;

const StyledTitleSection = styled.section`
  margin-top: 50px;
`;

const StyledTitle = styled.h1`
  font-size: 5rem;
  font-weight: normal;
  letter-spacing: 1px;
`;

const StyledSubtitle = styled.h2`
  margin-top: 10px;
  font-size: 2rem;
`;

const StyledAboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  line-height: 1.3;
`;

const StyledQuoteSection = styled.section`
  display: flex;
  align-items: center;
  font-style: italic;
`;

const StyledLink = styled(Link)`
  border-bottom: 1px solid white;
`;

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background/homeBackground.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 4000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout backgroundImage={data.file.sharp.fluid}>
      <StyledWrapper>
        <StyledTitleSection>
          <StyledTitle>Rock The Nigth</StyledTitle>
          <StyledSubtitle>Organizacja imprez i wiele więcej...</StyledSubtitle>
        </StyledTitleSection>
        <StyledAboutSection>
          <p>
            Łączymy wszystko, co tworzy klimat niezapomnianego eventu. Oprawa
            muzyczna uzupełniona efektami świetlnymi, pobudzenie wszystkich
            zmysłów, przypływ energii i radość z danej chwili.
          </p>
          <p>
            Muzyka jest przede wszystkim naszą pasją. Wiemy jak ważną rolę
            spełnia podczas eventów i jak wpływa na tworzenie nastroju.
            Repertuar dobieramy do konkretnych odbiorców i wydarzeń, staramy się
            by każdy znalazł coś dla siebie przy zachowaniu wyczucia i
            profesjonalizmu.
          </p>
          <p>
            Dzięki naszym umiejętnościom, nie tylko muzycznym, eventy są na
            wysokim poziomie z dopracowaniem detali. Oferujemy także{' '}
            <StyledLink to="/decoration">dekoracje</StyledLink> i dodatkowe{' '}
            <StyledLink to="/services">usługi</StyledLink>, wszystko po to, by
            podążać za trendami i potrzebami odbiorców.
          </p>
        </StyledAboutSection>
        <StyledQuoteSection>
          <p>
            „Muzyka to dusza wszechświata, skrzydła umysłu, lot wyobraźni i całe
            życie” - Platon.
          </p>
        </StyledQuoteSection>
      </StyledWrapper>
    </Layout>
  );
};

export default HomePage;
