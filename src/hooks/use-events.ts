import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface SanityImage {
  asset: {
    gatsbyImageData: IGatsbyImageData;
  };
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

interface EventsPage {
  upcomingEvents?: CopyWithImage;
  specialEvent?: CopyWithImage;
  sportsEvent?: CopyWithImage;
  liveMusic?: EventsSection;
  raffleSection?: CopyWithImage;
  happyHour?: CopyWithImage;
}

interface EventsPageQueryResponse {
  sanityEventsPage: EventsPage;
}

function useEvents(): EventsPage {
  const { sanityEventsPage } = useStaticQuery<EventsPageQueryResponse>(
    graphql`
      query SanityEventsQuery {
        sanityEventsPage(_id: { eq: "eventsPage" }) {
          happyHour {
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
          liveMusic {
            backgroundImage {
              asset {
                gatsbyImageData
              }
            }
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
          raffleSection {
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
          specialEvent {
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
          sportsEvent {
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
          upcomingEvents {
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
  return sanityEventsPage;
}

export { useEvents };
export {
  CopyWithImage,
  Event,
  EventsPage,
  EventsPageQueryResponse,
  EventsSection,
  SanityImage,
};
