module.exports = {
  siteMetadata: {
    title: 'Rock The Night Agencja Eventowa',
    description:
      'Agencja eventowa. Organizacja najlepszych imprez na każdą okazję. Niezapomniana oprawa muzyczna i dekoracje. Piękna fotografia i filmy upamiętniające wyjątkowe wydarzenia. Wypożyczanie profesjonalnego sprzętu.',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'assets/images',
      },
    },
  ],
};
