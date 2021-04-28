import { graphql, useStaticQuery } from 'gatsby';

interface NavItem {
  id: string;
  footerOnly: true | false | null;
  label: string;
  route: {
    current: string;
  };
}

type NavItems = Array<NavItem>;

interface SiteSettings {
  navItems: NavItems;
}

interface SiteNavigationQueryResponse {
  sanityNavigation: SiteSettings;
}

function useSiteNavigation(): NavItems {
  const { sanityNavigation }: SiteNavigationQueryResponse = useStaticQuery(
    graphql`
      query SiteNavigationQuery {
        sanityNavigation(_id: { eq: "navigation" }) {
          navItems {
            id: _key
            footerOnly
            label
            route {
              current
            }
          }
        }
      }
    `
  );
  return sanityNavigation.navItems;
}

export { useSiteNavigation };
export type { NavItem, NavItems };
