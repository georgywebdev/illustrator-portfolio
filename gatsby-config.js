module.exports = {
  siteMetadata: {
    title: `Designer Site`,
    description: `A simple designer portfolio website powered by Contentful CMS.`,
    author: `Georgy Sorokin`,
  },
  plugins: [
    `gatsby-plugin-sass`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "fmqvb91t4stw",
        accessToken: "29-uj3RCh-fwEbGJe3AWj0aCB5l6ifozEHIZU_JOkPE",
      },
    },
  ],
}
