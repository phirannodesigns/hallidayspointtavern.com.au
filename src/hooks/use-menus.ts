import { graphql, useStaticQuery } from 'gatsby';

interface MenuItem {
  id: string;
  price: string;
  itemName: string;
  description: string;
}

type MenuItems = MenuItem[];

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
              id: _key
              price
              itemName
              description
            }
          }
        }
      }
    `
  );
  return allSanityMenuList.nodes;
}

export { useMenus };
export type { MenuItem, MenuItems, MenuList, Menus };
