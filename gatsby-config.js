const dotenv = require('dotenv');

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Check what node environment is running for Sanity plugin
const isProd = process.env.NODE_ENV === 'production';

const siteUrl = 'https://www.hallidayspointtavern.com.au/'

module.exports = {
  siteMetadata: {
    siteUrl,
  },
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {
          quality: 90,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'p8jsw8i3',
        dataset: 'production',

        // Set to `true` in order for drafts to replace their published version. By default, drafts will be skipped.
        overlayDrafts: !isProd,

        // Set to `true` to keep a listener open and update with the latest changes in realtime. If you add a `token` you will get all content updates down to each keypress.
        watchMode: !isProd,

        // Authentication token for fetching data from private datasets, or when using overlayDrafts
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
  ],
};
