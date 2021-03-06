module.exports = {
  siteMetadata: {
    title: `LANDIAN`,
    description: `Landian IT Consultancy,  empowering companies to migrate to the cloud`,
    author: `@aidan-landian`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `landian-consultancy`,
        short_name: `Landian`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
        `Source Sans Pro\:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i`,
        `Merriweather\:300,300i,400,400i,700,700i,900,900i` 
        ]
      },
      
    },

  ],
}
