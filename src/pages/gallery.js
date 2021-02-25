import React from 'react';
import Layout from '../layout/layout';
import { graphql, useStaticQuery } from 'gatsby';

const GalleryPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background/galleryBackground.jpeg" }) {
        sharp: childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return <Layout backgroundImage={data.file.sharp.fluid}>GalleryPage</Layout>;
};

export default GalleryPage;
