import React from 'react';
import Layout from '../layout/layout';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import ContactForm from '../components/organisms/ContactForm/ContactForm';

const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background/contactBackground.jpeg" }) {
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
        <ContactForm />
      </StyledWrapper>
    </Layout>
  );
};

export default ContactPage;
