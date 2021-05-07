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

interface Event {
  id: string;
  _rawDescription: unknown[];
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

interface CopyWithImage {
  _rawCopy: unknown[];
  cta?: Ctas;
  backgroundImage?: SanityImage;
  description?: string;
  heading1?: string;
  heading2: string;
  isHidden?: boolean;
  mainImage?: SanityImage;
}

interface HomePage {
  courtesyBus?: CopyWithImage;
  menuSection?: CopyWithImage;
  trivia?: CopyWithImage;
  upcomingEvents?: EventsSection;
  welcomeSection?: CopyWithImage;
}

interface HomePageQueryResponse {
  sanityHomePage: HomePage;
}

function useHomePage(): HomePage {
  const { sanityHomePage } = useStaticQuery<HomePageQueryResponse>(
    graphql`
      query SanityHomePageQuery {
        sanityHomePage(_id: { eq: "homePage" }) {
          courtesyBus {
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
          menuSection {
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
          trivia {
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
          upcomingEvents {
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
          welcomeSection {
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
        }
      }
    `
  );
  return sanityHomePage;
}

export { useHomePage };
export type { CopyWithImage, EventsSection };
