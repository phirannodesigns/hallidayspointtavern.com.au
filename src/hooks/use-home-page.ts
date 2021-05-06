import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface SanityImage {
  asset: {
    gatsbyImageData: IGatsbyImageData;
  };
}

interface Event {
  id: string;
  _rawDescription: unknown[];
  overview: string;
}

interface EventsSection {
  backgroundImage?: SanityImage;
  description?: string;
  events: Event[];
  heading1?: string;
  heading2: string;
  isHidden?: boolean;
  mainImage: SanityImage;
}

interface CopyWithImage {
  _rawCopy: unknown[];
  backgroundImage?: SanityImage;
  description?: string;
  heading1?: string;
  heading2: string;
  isHidden?: boolean;
  mainImage: SanityImage;
}

interface HomePage {
  upcomingEvents?: EventsSection;
  trivia?: CopyWithImage;
}

interface HomePageQueryResponse {
  sanityHomePage: HomePage;
}

function useHomePage(): HomePage {
  const { sanityHomePage } = useStaticQuery<HomePageQueryResponse>(
    graphql`
      query SanityHomePageQuery {
        sanityHomePage(_id: { eq: "homePage" }) {
          upcomingEvents {
            description
            events {
              id: _key
              _rawDescription
              overview
            }
            heading1
            heading2
            isHidden
            mainImage {
              asset {
                gatsbyImageData(width: 960)
              }
            }
          }
          trivia {
            _rawCopy
            backgroundImage {
              asset {
                gatsbyImageData
              }
            }
            description
            heading1
            heading2
            isHidden
            mainImage {
              asset {
                gatsbyImageData(width: 960)
              }
            }
          }
        }
      }
    `
  );
  return sanityHomePage;
}

export { useHomePage };
