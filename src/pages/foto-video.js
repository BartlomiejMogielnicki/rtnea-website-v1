import React from 'react';
import Layout from '../layout/layout';
import { graphql, useStaticQuery } from 'gatsby';
import Hero from '../components/atoms/Hero/Hero';

const PhotoPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background/photoBackground.jpeg" }) {
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
          <li>Fotorelacja z wesel</li>
          <li>Fotorelacja eventowa</li>
          <li>Sesja narzeczeńska</li>
          <li>Fotografia okolicznościowa</li>
          <li>Sesje produktowe</li>
          <li>Zdjęcia nieruchomości</li>
          <li>Konferencje i targi</li>
          <li>Foto albumy</li>
        </ul>
      </Hero>
    </Layout>
  );
};

export default PhotoPage;
