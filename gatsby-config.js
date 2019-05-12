module.exports = {
  siteMetadata: {
    title: `Frederic Woelffel`,
    position: `Backend web developer`,
    description: `I'm a backend web developer with a great affinity with Node.js.
    Welcome to my landing page, where you'll find all you need to know more about me and get in touch.`,
    author: `@fwoelffel`,
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
        name: `Frederic Woelffel`,
        short_name: `fwoelffel.me`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-139958086-1",
      },
    },
  ],
}
