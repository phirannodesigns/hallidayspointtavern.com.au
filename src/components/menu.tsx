import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useTabsContext,
} from '@reach/tabs';
import * as React from 'react';
import { Fragment } from 'react';

import { MenuItems, MenuList, Menus, useMenus } from '../hooks/use-menus';

function Menu(): React.ReactElement {
  const menus = useMenus();
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <article id="menu" className="bg-white">
      <div className="relative w-full px-4 py-24 mx-auto bg-cream max-w-screen-2xl sm:px-6 lg:px-12">
        <Tabs
          index={tabIndex}
          onChange={(index) => {
            setTabIndex(index);
          }}
        >
          <TabList className="flex flex-col space-y-4 font-black text-black md:space-y-0 md:space-x-4 md:flex-row md:justify-between md:items-end">
            <h2 className="relative inline-flex flex-col text-xl leading-none sm:text-2xl">
              <span className="relative pl-12">
                Check out
                <br />
              </span>
              <div className="relative inline-block">
                <div className="relative inline text-5xl font-black sm:text-5xl">
                  <span className="relative z-10">The Menu</span>
                </div>
              </div>
            </h2>
            <div className="block w-full mx-auto sm:hidden">
              <Listbox value={tabIndex} onChange={setTabIndex}>
                {({ open }) => (
                  <>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white cursor-default focus:outline-none sm:text-sm">
                        <span className="block text-lg font-black truncate">
                          {menus[tabIndex].category}
                        </span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <SelectorIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options
                          static
                          className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                          {menus.map((menu, index) => (
                            <Listbox.Option
                              key={menu.id}
                              className={({ active }) =>
                                `${
                                  active ? 'bg-gray-100 z-10' : 'text-gray-900'
                                }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                              }
                              value={index}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`${
                                      selected ? 'font-medium' : 'font-normal'
                                    } block truncate`}
                                  >
                                    {menu.category}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                      <CheckIcon
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
            <div className="flex-1 hidden -mr-2 sm:flex">
              <div className="mx-auto">
                {menus.map((item, index) => (
                  <MenuTab key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          </TabList>
          <TabPanels className="grid gap-16 mt-4 bg-white">
            {menus.map(({ items, id }, index) => (
              <MenuPanel
                key={id}
                menuItems={items}
                menus={menus}
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
      } relative self-center px-3 py-2 focus:outline-none focus:ring`}
      {...rest}
    >
      <div className="relative text-3xl font-black leading-none">
        <span className="relative z-10">{item.category}</span>
        <span
          aria-hidden
          style={{ width: 'calc(100% + 0.5rem)' }}
          className={`absolute block z-0 bottom-0 -left-1 -right-1 h-3 transition ease-in-out duration-300
           ${index === selectedIndex ? 'bg-olive' : ''}`}
        />
      </div>
    </Tab>
  );
}

interface MenuPanelProps {
  index: number;
  menuItems: MenuItems;
  menus: Menus;
}

function MenuPanel({ menuItems, index, menus, ...rest }: MenuPanelProps) {
  const { selectedIndex } = useTabsContext();
  return (
    <TabPanel
      className={`px-4 sm:px-6 lg:px-8 py-8 focus:outline-none ${
        index === selectedIndex ? 'block' : ''
      }`}
      {...rest}
    >
      <div className="w-full max-w-lg mx-auto text-black md:max-w-none">
        {menus[selectedIndex].description ? (
          <p className="text-black md:text-center">
            {menus[selectedIndex].description}
          </p>
        ) : null}
        <div className="grid mt-8 gap-x-12 gap-y-8 md:grid-cols-2">
          {menuItems.map((menuItem) => {
            if (menuItem._type === 'menuHeading') {
              return (
                <div key={menuItem.id} className="prose md:col-span-2">
                  <h3 className="text-2xl font-semibold !uppercase">
                    {menuItem.heading}
                  </h3>
                </div>
              );
            }
            if (menuItem._type === 'menuItem') {
              return (
                <div key={menuItem.id} className="prose">
                  <React.Fragment key={menuItem.id}>
                    <div className="sm:flex sm:items-start sm:justify-between sm:space-x-4 sm:col-span-2">
                      <h4 className="text-lg !my-0 font-bold">
                        {menuItem.itemName}
                      </h4>
                      <p className="text-sm font-bold !my-0 sm:text-lg sm:text-right whitespace-nowrap">
                        {menuItem.price}
                      </p>
                    </div>
                    <p className="!mt-1 text-sm">{menuItem.description}</p>
                  </React.Fragment>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </TabPanel>
  );
}

export { Menu };
