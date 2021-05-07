import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface SanityImage {
  asset: {
    gatsbyImageData: IGatsbyImageData;
  };
}

interface PageCta {
  _type: 'pageCta';
  id: string;
  page: string;
  text: string;
}

interface FileCta {
  _type: 'fileCta';
  id: string;
  file: {
    asset: {
      url: string;
    };
  };
  text: string;
}

interface LinkCta {
  _type: 'linkCta';
  id: string;
  link: string;
  text: string;
}

type Ctas = Array<PageCta | FileCta | LinkCta>;

interface CopyWithImage {
  // eslint-disable-next-line @typescript-eslint/ban-types
  _rawCopy: [object];
  backgroundImage?: SanityImage;
  cta?: Ctas;
  description?: string;
  heading1?: string;
  heading2: string;
  isHidden?: boolean;
  mainImage?: SanityImage;
}

interface Event {
  id: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  _rawDescription: [object];
  overview: string;
}

interface EventsSection {
  backgroundImage?: SanityImage;
  cta?: Ctas;
  description?: string;
  events: Event[];
  heading1?: string;
  heading2: string;
  isHidden?: boolean;
  mainImage?: SanityImage;
}

interface EventsPage {
  happyHour?: CopyWithImage;
  liveMusic?: EventsSection;
  raffleSection?: CopyWithImage;
  specialEvent?: CopyWithImage;
  sportsEvent?: CopyWithImage;
  upcomingEvents?: CopyWithImage;
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
            cta {
              ... on SanityFileCta {
                id: _key
                _type
                file {
                  asset {
                    url
                  }
                }
                text
              }
              ... on SanityLinkCta {
                id: _key
                _type
                link
                text
              }
              ... on SanityPageCta {
                id: _key
                _type
                page
                text
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
            cta {
              ... on SanityFileCta {
                id: _key
                _type
                file {
                  asset {
                    url
                  }
                }
                text
              }
              ... on SanityLinkCta {
                id: _key
                _type
                link
                text
              }
              ... on SanityPageCta {
                id: _key
                _type
                page
                text
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
            cta {
              ... on SanityFileCta {
                id: _key
                _type
                file {
                  asset {
                    url
                  }
                }
                text
              }
              ... on SanityLinkCta {
                id: _key
                _type
                link
                text
              }
              ... on SanityPageCta {
                id: _key
                _type
                page
                text
              }
            }
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
            cta {
              ... on SanityFileCta {
                id: _key
                _type
                file {
                  asset {
                    url
                  }
                }
                text
              }
              ... on SanityLinkCta {
                id: _key
                _type
                link
                text
              }
              ... on SanityPageCta {
                id: _key
                _type
                page
                text
              }
            }
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
            cta {
              ... on SanityFileCta {
                id: _key
                _type
                file {
                  asset {
                    url
                  }
                }
                text
              }
              ... on SanityLinkCta {
                id: _key
                _type
                link
                text
              }
              ... on SanityPageCta {
                id: _key
                _type
                page
                text
              }
            }
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
            cta {
              ... on SanityFileCta {
                id: _key
                _type
                file {
                  asset {
                    url
                  }
                }
                text
              }
              ... on SanityLinkCta {
                id: _key
                _type
                link
                text
              }
              ... on SanityPageCta {
                id: _key
                _type
                page
                text
              }
            }
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
export { CopyWithImage, EventsSection };
