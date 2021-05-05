import { graphql, useStaticQuery } from 'gatsby';

interface MenuHeading {
  _type: 'menuHeading';
  id: string;
  heading: string;
}

interface MenuItem {
  _type: 'menuItem';
  id: string;
  price: string;
  itemName: string;
  description: string;
}

type MenuItems = Array<MenuItem | MenuHeading>;

interface MenuList {
  id: string;
  category: string;
  description: string;
  items: MenuItems;
}

type Menus = MenuList[];

interface AllSanityMenuList {
  allSanityMenuList: {
    nodes: Menus;
  };
}

function useMenus(): Menus {
  const { allSanityMenuList } = useStaticQuery<AllSanityMenuList>(
    graphql`
      query SanityMenusQuery {
        allSanityMenuList(sort: { fields: _updatedAt }) {
          nodes {
            id
            category
            description
            items {
              ... on SanityMenuHeading {
                _type
                _key
                id: _key
                heading
              }
              ... on SanityMenuItem {
                _type
                id: _key
                price
                itemName
                description
              }
            }
          }
        }
      }
    `
  );
  return allSanityMenuList.nodes;
}

export { useMenus };
export type { MenuHeading, MenuItem, MenuItems, MenuList, Menus };
