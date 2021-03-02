require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Gatsby Boilerplate",
    description: "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
    author: "@mhmmr",
    siteUrl: "https://github.com/mhmmr",
    image: "https://res.cloudinary.com/muhrusdi/image/upload/v1604903512/template-awwwara.jpg"
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: false,
    FAST_DEV: true,
    FAST_REFRESH: true,
    DEV_SSR: false,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        stages: ["develop"],
        extensions: ["js", "jsx"],
        exclude: ["node_modules", ".cache", "public"],
        // Any eslint-webpack-plugin options below
      }
    },
    "gatsby-plugin-postcss",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
