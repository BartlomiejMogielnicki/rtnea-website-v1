import React from 'react';
import Layout from '../layout/layout';
import { graphql, useStaticQuery } from 'gatsby';

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background/homeBackground.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return <Layout backgroundImage={data.file.sharp.fluid}>HomePage</Layout>;
};

export default HomePage;
