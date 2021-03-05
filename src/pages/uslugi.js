import React from 'react';
import Layout from '../layout/layout';
import { graphql, useStaticQuery } from 'gatsby';
import Hero from '../components/atoms/Hero/Hero';

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background/servicesBackground.jpeg" }) {
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
      <Hero backgroundImage={data.file.sharp.fluid}>ServicesPage</Hero>
    </Layout>
  );
};

export default ServicesPage;
