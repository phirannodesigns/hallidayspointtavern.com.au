import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useTabsContext,
} from '@reach/tabs';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

interface MenuItem {
  id: string;
  price: string;
  itemName: string;
  description: string;
}

interface MenuList {
  id: string;
  category: string;
  description: string;
  items: Array<MenuItem>;
}

interface AllSanityMenuList {
  allSanityMenuList: {
    nodes: Array<MenuList>;
  };
}

function Menu(): React.ReactElement {
  const { allSanityMenuList } = useStaticQuery<AllSanityMenuList>(graphql`
    {
      allSanityMenuList(sort: { fields: _createdAt }) {
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
  `);

  const { nodes: menuData } = allSanityMenuList;
  const startingIndex = 0;

  return (
    <article id="menu" className="bg-white">
      <div className="relative w-full px-4 py-24 mx-auto bg-cream max-w-screen-2xl sm:px-6 lg:px-8">
        <Tabs defaultIndex={startingIndex}>
          <TabList className="flex flex-col px-4 space-y-4 text-4xl font-black text-black font-script md:space-y-0 md:space-x-4 md:flex-row md:justify-between">
            <div>
              <div className="flex flex-col">
                <h2 className="px-4 -mb-4 text-xl font-bold text-black md:text-center font-script">
                  Check out
                </h2>
                <h2 className="px-4 py-2 text-4xl font-black text-black font-script">
                  The Menu
                </h2>
              </div>
            </div>
            <div>
              {menuData.map((item, index) => (
                <MenuTab key={item.id} item={item} index={index} />
              ))}
            </div>
          </TabList>
          <TabPanels className="grid gap-16 mt-12 bg-white">
            {menuData.map(({ items, id }, index) => (
              <MenuPanel
                key={id}
                dishes={items}
                menuData={menuData}
                index={index}
              />
            ))}
          </TabPanels>
        </Tabs>
      </div>
    </article>
  );
}

interface MenuTabProps {
  index: number;
  item: MenuList;
}

function MenuTab({ index, item, ...rest }: MenuTabProps) {
  const { selectedIndex } = useTabsContext();
  return (
    <Tab
      className={`${
        index === selectedIndex ? '' : 'text-gray-400'
      } relative self-center px-3 py-2 leading-none focus:outline-none focus:ring`}
      {...rest}
    >
      <div
        className={`absolute bottom-0 left-0 w-full h-4 transition ease-in-out duration-300 ${
          index === selectedIndex ? 'bg-olive' : ''
        } `}
      />
      <span className="relative">{item.category}</span>
    </Tab>
  );
}

interface MenuPanelProps {
  index: number;
  dishes: Array<MenuItem>;
  menuData: Array<MenuList>;
}

function MenuPanel({ dishes, index, menuData, ...rest }: MenuPanelProps) {
  const { selectedIndex } = useTabsContext();
  return (
    <TabPanel
      className={`p-8 focus:outline-none ${
        index === selectedIndex ? 'block' : ''
      }`}
      {...rest}
    >
      <p className="text-center text-black">
        {menuData[selectedIndex].description}
      </p>
      <div className="grid gap-12 mt-8 md:grid-cols-2">
        {dishes.map(({ id, itemName, description, price }) => (
          <div
            key={id}
            className="flex items-start justify-between space-x-16 text-black"
          >
            <div>
              <p className="text-lg font-bold uppercase font-script">
                {itemName}
              </p>
              <p className="mt-1 text-sm leading-tight ">{description}</p>
            </div>
            <p className="text-lg font-bold uppercase font-script whitespace-nowrap">
              {price}
            </p>
          </div>
        ))}
      </div>
    </TabPanel>
  );
}

export { Menu };
