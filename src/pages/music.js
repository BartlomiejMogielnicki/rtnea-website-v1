import React from 'react';
import Layout from '../layout/layout';
import { graphql, useStaticQuery } from 'gatsby';

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

  return <Layout backgroundImage={data.file.sharp.fluid}>MusicPage</Layout>;
};

export default MusicPage;
