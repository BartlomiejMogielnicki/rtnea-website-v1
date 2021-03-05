import React from 'react';
import Layout from '../layout/layout';
import { graphql, useStaticQuery } from 'gatsby';
import Hero from '../components/atoms/Hero/Hero';

const GalleryPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background/galleryBackground.jpeg" }) {
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
      <Hero backgroundImage={data.file.sharp.fluid}>GalleryPage</Hero>
    </Layout>
  );
};

export default GalleryPage;
