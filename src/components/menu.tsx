import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Tabs,
  TabPanels,
  TabPanel,
  TabList,
  Tab,
  useTabsContext,
} from '@reach/tabs';
import { useStaticQuery, graphql } from 'gatsby';
import { nanoid } from 'nanoid';

function Menu() {
  const { allSanityMenuList } = useStaticQuery(graphql`
    {
      allSanityMenuList(sort: { fields: _createdAt }) {
        edges {
          node {
            category
            description
            items {
              price
              itemName
              description
            }
          }
        }
      }
    }
  `);

  const menuData = allSanityMenuList.edges;
  let startingIndex = 0;

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
                <MenuTab index={index} item={item.node} key={nanoid()} />
              ))}
            </div>
          </TabList>
          <TabPanels className="grid gap-16 p-8 mt-12 bg-white grild-cols-2">
            {menuData.map((item, index) => (
              <MenuPanel
                dishes={item.node.items}
                index={index}
                key={nanoid()}
                menuData={menuData}
              />
            ))}
          </TabPanels>
        </Tabs>
      </div>
    </article>
  );
}

function MenuTab({ index, item, ...props }) {
  const { selectedIndex } = useTabsContext();
  return (
    <Tab
      className={`${
        index === selectedIndex ? '' : 'text-gray-400'
      } relative self-center px-3 py-2 leading-none focus:outline-none focus:ring`}
      {...props}
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
MenuTab.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
};

function MenuPanel({ dishes, index, menuData, ...props }) {
  const { selectedIndex } = useTabsContext();
  return (
    <TabPanel
      className={`focus:outline-none ${index === selectedIndex ? 'block' : ''}`}
      {...props}
    >
      <p className="text-center text-black">
        {menuData[selectedIndex].node.description}
      </p>
      <div className="grid gap-12 mt-8 md:grid-cols-2">
        {dishes.map((dish) => (
          <div
            className="flex items-start justify-between space-x-16 text-black"
            key={nanoid()}
          >
            <div>
              <p className="text-lg font-bold uppercase font-script">
                {dish.itemName}
              </p>
              <p className="mt-1 text-sm leading-tight ">{dish.description}</p>
            </div>
            <p className="text-lg font-bold uppercase font-script whitespace-nowrap">
              {dish.price}
            </p>
          </div>
        ))}
      </div>
    </TabPanel>
  );
}

MenuPanel.propTypes = {
  index: PropTypes.number.isRequired,
  dishes: PropTypes.array.isRequired,
  menuData: PropTypes.array.isRequired,
};

export { Menu };
