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
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "fmqvb91t4stw",
        accessToken: "29-uj3RCh-fwEbGJe3AWj0aCB5l6ifozEHIZU_JOkPE",
      },
    },
  ],
}
