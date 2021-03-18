import React from 'react';
import Layout from '../layout/layout';
import { graphql, useStaticQuery } from 'gatsby';
import Hero from '../components/atoms/Hero/Hero';

const DecorationPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background/decorationBackground.jpg" }) {
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
        <ul>
          <li>Love weddingowe</li>
          <li>Efekty świetlne</li>
          <li>Oświetlenie dekoracyjne</li>
          <li>Foto budka</li>
          <li>TV</li>
          <li>Sztuczny dym</li>
        </ul>
        <p>
          Sztuczny dym jest idealnym rozwiązaniem do uzyskania świetnego na
          pokazach, eventach, weselach jak i mniejszych wydarzeniach. Stosowanie
          dymu nadanie efektom świetlnym dodatkowy wymiar, cząsteczki dymu w
          powietrzu sprawiają, że promienie efektu świetlnego są również
          widoczne. Jest to absolutna konieczność, zwłaszcza przy stosowaniu
          efektów laserowych.
        </p>
      </Hero>
    </Layout>
  );
};

export default DecorationPage;
