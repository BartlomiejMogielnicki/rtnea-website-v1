import React from 'react';
import Layout from '../layout/layout';
import { graphql, useStaticQuery } from 'gatsby';

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background/contactBackground.jpeg" }) {
        sharp: childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return <Layout backgroundImage={data.file.sharp.fluid}>ContactPage</Layout>;
};

export default ContactPage;
