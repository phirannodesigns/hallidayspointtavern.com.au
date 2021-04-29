import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface Gig {
  _key: string;
  _rawDescription: [];
  overview: string;
}

interface MainImage {
  asset: {
    gatsbyImageData: IGatsbyImageData;
  };
}

interface SanityHomeEvents {
  heading1: string;
  heading2: string;
  gigs: Array<Gig>;
  description: string;
  mainImage: MainImage;
}

interface Data {
  sanityHomeEvents: SanityHomeEvents;
}

function useHomeEvent(): SanityHomeEvents {
  const { sanityHomeEvents } = useStaticQuery<Data>(
    graphql`
      query HomePageEventsQuery {
        sanityHomeEvents(_id: { eq: "homeEvents" }) {
          heading1
          heading2
          gigs {
            _key
            _rawDescription
            overview
          }
          description
          mainImage {
            asset {
              gatsbyImageData(width: 1920)
            }
          }
        }
      }
    `
  );
  return sanityHomeEvents;
}

export { useHomeEvent };
export type { Data, Gig, MainImage, SanityHomeEvents };
