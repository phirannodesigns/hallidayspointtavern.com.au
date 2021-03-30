import { graphql, useStaticQuery } from 'gatsby';

type NavItem = {
  id: string;
  footerOnly: true | false | null;
  label: string;
  route: {
    current: string;
  };
};

type NavItems = Array<NavItem>;

type SiteSettings = {
  navItems: NavItems;
};

function useSiteNavigation(): NavItems {
  const {
    sanityNavigation,
  }: { sanityNavigation: SiteSettings } = useStaticQuery(
    graphql`
      query SiteNavigationQuery {
        sanityNavigation {
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
