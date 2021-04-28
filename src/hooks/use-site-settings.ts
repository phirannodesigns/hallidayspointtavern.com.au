import { graphql, useStaticQuery } from 'gatsby';

interface Address {
  googleMaps: {
    embed: string;
    link: string;
  };
  streetAddress: string;
  suburb: string;
}

interface Hours {
  id: string;
  days: string;
  hours: string;
}

interface ShareImage {
  asset: {
    url: string;
  };
}

interface SocialLink {
  id: string;
  link: string;
  socialNetwork: string;
}

interface SiteSettings {
  address: Address;
  description: string;
  email: string;
  hours: Array<Hours>;
  phoneNumber: string;
  shareImage: ShareImage;
  siteUrl: string;
  socialLinks: Array<SocialLink>;
  title: string;
}

interface SiteSettingsQueryResponse {
  sanitySiteSettings: SiteSettings;
}

function useSiteSettings(): SiteSettings {
  const { sanitySiteSettings }: SiteSettingsQueryResponse = useStaticQuery(
    graphql`
      query SiteSettingsQuery {
        sanitySiteSettings(_id: { eq: "siteSettings" }) {
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
