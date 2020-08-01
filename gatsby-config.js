/* eslint-disable camelcase */
const path = require("path");

const title = "Fideldy Bros Well Drilling";
const description =
  "Professional well drilling since 1958. Well services & repair, inspections & water testing, vertical geothermal installs, and more.";

module.exports = {
  siteMetadata: {
    siteUrl: "https://fideldywelldrilling.com",
    title,
    titleAlt: title,
    description,
    banner: "/logo.png",
    headline: "Professional well drilling since 1958.",
    siteLanguage: "en",
    ogLanguage: "en_US",
    author: "Brent Mealhouse",
    // twitter: '@username',
    // facebook: 'facebook-site-name',
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: title,
        short_name: title,
        description,
        start_url: "/",
        background_color: "#181a1b",
        theme_color: "#3182ce",
        display: "standalone",
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        isUsingColorMode: false,
      },
    },
    // Must be placed at the end
    "gatsby-plugin-offline",
  ],
};
