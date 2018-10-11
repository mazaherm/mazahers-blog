module.exports = {
  siteMetadata: {
    title: `Mazaher's Blog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
  ],
}
