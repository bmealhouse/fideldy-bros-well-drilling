const title = "Fideldy Bros Well Drilling";
const description = "Well drilling, well services & repair, and geothermal";

module.exports = {
  siteMetadata: {
    siteUrl: "https://fideldy-bros-well-drilling.bmealhouse.now.sh",
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
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        isUsingColorMode: false,
      },
    },
    "gatsby-plugin-sitemap",
    {
      /* eslint-disable camelcase */
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
      /* eslint-enable camelcase */
    },
    // Must be placed at the end
    "gatsby-plugin-offline",
  ],
};
