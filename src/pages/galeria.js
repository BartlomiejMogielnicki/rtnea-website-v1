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
      <Hero backgroundImage={data.file.sharp.fluid}>
        <div>
          <h2>Wydarzenia</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h2>Opinie</h2>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              sapiente totam.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              culpa quas laudantium.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              quasi fugit, amet accusamus necessitatibus obcaecati commodi odit
              animi.
            </li>
          </ul>
        </div>
        <div>
          <h2>Referencje</h2>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eum consequuntur.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eum consequuntur.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eum consequuntur.
            </li>
          </ul>
        </div>
      </Hero>
    </Layout>
  );
};

export default GalleryPage;
