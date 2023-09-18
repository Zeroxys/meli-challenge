/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `meli-challenge`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700`
        ],
        display: 'swap',
      },
    }
  ],
};
