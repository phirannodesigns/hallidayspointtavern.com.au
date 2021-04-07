// Keep all static queries in this file
// Add new queries as necessary
// (you add aliases if you need to access the same node more than once)
// To use:
// import useGraphql from './src/hooks/use-graphql.js'
// const { site } = useGraphql();
// return <h1>{site.siteMetadata.title}</h1>;

import { graphql, useStaticQuery } from 'gatsby';

export const useGraphQL = () => {
  const data = useStaticQuery(
    graphql`
      {
        landingWelcomeImage: file(relativePath: { eq: "landing-welcome.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    `
  );
  return data;
};
