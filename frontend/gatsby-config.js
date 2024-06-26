const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Executive Limo Service`,
    description: `Executive limousine and transportation services from Miami offers safe rides to any destination. Book your luxury ride with Executive Limo Service.`,
    author: `@digitalocean`,
    siteUrl: `https://executivelimoservicemiami.com/`,
    keywords: `limo service miami, car service miami, airport transfer miami`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.resolve(path.join(__dirname, 'pages')),
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.resolve(path.join(__dirname, 'pages')),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: `blog`,
    //     path: `${__dirname}/blog`,
    //   }
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: `services`,
    //     path: `${__dirname}/services`,
    //   }
    // },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pages`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#282629`,
          // This will impact how browsers show your PWA/websit
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
        path: path.resolve(path.join(__dirname, 'pages'))
      },
    },
  ],
}
