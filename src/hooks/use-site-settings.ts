import { graphql, useStaticQuery } from 'gatsby';

type SiteSettings = {
  address: {
    googleMaps: {
      embed: string;
      link: string;
    };
    streetAddress: string;
    suburb: string;
  };
  description: string;
  email: string;
  hours: Array<{
    id: string;
    days: string;
    hours: string;
  }>;
  phoneNumber: string;
  shareImage: {
    asset: {
      url: string;
    };
  };
  siteUrl: string;
  socialLinks: Array<{
    id: string;
    link: string;
    socialNetwork: string;
  }>;
  title: string;
};

function useSiteSettings(): SiteSettings {
  const {
    sanitySiteSettings,
  }: { sanitySiteSettings: SiteSettings } = useStaticQuery(
    graphql`
      query SiteSettingsQuery {
        sanitySiteSettings {
          address {
            googleMaps {
              embed
              link
            }
            streetAddress
            suburb
          }
          description
          email
          hours {
            id: _key
            days
            hours
          }
          phoneNumber
          shareImage {
            asset {
              url
            }
          }
          siteUrl
          socialLinks {
            id: _key
            link
            socialNetwork
          }
          title
        }
      }
    `
  );
  return sanitySiteSettings;
}

export { useSiteSettings };
export type { SiteSettings };
