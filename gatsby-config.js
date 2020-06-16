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
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.API_KEY,
      },
    },
  ],
}
