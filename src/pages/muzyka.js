import React from 'react';
import Layout from '../layout/layout';
import { graphql, useStaticQuery } from 'gatsby';
import Hero from '../components/atoms/Hero/Hero';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  color: #fff;
`;

const MusicPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background/musicBackground.jpeg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 4000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Hero backgroundImage={data.file.sharp.fluid}>
        <div>
          <div>
            <p>
              Repertuar dostosowujemy pod odbiorcę i event, nie zamykamy się na
              żaden gatunek muzyczny. Jeśli nie wiesz jak określić swoje
              preferencje wypracujemy to razem, uzgodnimy w jakim kierunku
              muzycznym podążać.
            </p>
            <p>
              Wybieramy największe polskie i światowe przeboje, chętni
              zagłębiamy się w polskie klasyki rockowe, lata 90, a jeśli goście
              preferują nie straszne nam latino, muzyka klubowa oraz discopolo
              (dla utrzymania jakości preferujemy największe hity tego gatunku).
            </p>
          </div>
          <div>
            <p>
              Jesteśmy przygotowani na obsługę audio muzyczną wydarzeń takich
              jak:
            </p>
            <ul>
              <li>EVENTY MUZYCZNE</li>
              <li>IMPREZY PRYWATNE</li>
              <li>EVENTY KORPORACYJNE</li>
              <li>KONFERENCJE & SZKOLENIA</li>
              <li>PRZYJĘCIA WESELNE</li>
            </ul>
          </div>
        </div>
      </Hero>
      <StyledWrapper>
        <div>
          <p>Co nas wyróżnia:</p>
          <ul>
            <li>
              Wysokiej jakości sprzęt muzyczny i nagłośnieniowy to obowiązkowe
              narzędzia naszej pracy. Oferujemy także eleganckie dodatki:
              efektowne oświetlenie, nowoczesną dekorację stanowiska, napis
              LOVE, ekrany TV, projektor gobo.
            </li>
            <li>
              Muzyka w najlepszej wersji dobierana w zróżnicowany repertuar.
              Skupiamy się na tworzeniu atmosfery swobodnej zabawy, która
              wciągnie na parkiet nawet mniej odważnych. Muzykę dostosowujemy do
              etapu eventu, dobór trafionej kompozycji hitów jest sednem dobrej
              zabawy.
            </li>
            <li>
              Personalizujemy eventy, pomagamy wyrazić emocje i podnosimy
              przekaz m.in. przez wyświetlanie prezentacji, zdjęć.
            </li>
            <li>
              Prowadzimy niekrępujące zabawy i konkursy. Wskażemy jakie zabawy
              sprawią najwięcej frajdy, a czego lepiej unikać.
            </li>
            <li>
              Nowoczesne podejście, w tym do prowadzenia wesel. Nowoczesne
              eventy pozwalają decydować jakie tradycyjnego elementy zachować, a
              z jakich zrezygnować. Możemy zmienić kolejność wedle uznania.
            </li>
          </ul>
        </div>
      </StyledWrapper>
    </Layout>
  );
};

export default MusicPage;
