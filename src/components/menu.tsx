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
          <TabList className="flex flex-col px-4 space-y-4 text-4xl font-black text-black md:space-y-0 md:space-x-4 md:flex-row md:justify-between">
            <div>
              <div className="flex flex-col">
                <span className="px-4 -mb-4 text-xl font-normal text-black md:text-center">
                  Check out
                </span>
                <span className="px-4 py-2 text-4xl font-black text-black">
                  The Menu
                </span>
              </div>
            </div>
            <div className="block w-full mx-auto sm:hidden">
              <Listbox value={tabIndex} onChange={setTabIndex}>
                {({ open }) => (
                  <>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                        <span className="block truncate">
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
                          className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                          {menus.map((menu, index) => (
                            <Listbox.Option
                              key={menu.id}
                              className={({ active }) =>
                                `${
                                  active
                                    ? 'text-amber-900 bg-amber-100'
                                    : 'text-gray-900'
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
            <div className="hidden sm:block">
              {menus.map((item, index) => (
                <MenuTab key={item.id} item={item} index={index} />
              ))}
            </div>
          </TabList>
          <TabPanels className="grid gap-16 mt-12 bg-white">
            {menus.map(({ items, id }, index) => (
              <MenuPanel key={id} dishes={items} menus={menus} index={index} />
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
  dishes: MenuItems;
  menus: Menus;
}

function MenuPanel({ dishes, index, menus, ...rest }: MenuPanelProps) {
  const { selectedIndex } = useTabsContext();
  return (
    <TabPanel
      className={`p-8 focus:outline-none ${
        index === selectedIndex ? 'block' : ''
      }`}
      {...rest}
    >
      <p className="text-center text-black">
        {menus[selectedIndex].description}
      </p>
      <div className="grid gap-12 mt-8 md:grid-cols-2">
        {dishes.map(({ id, itemName, description, price }) => (
          <div
            key={id}
            className={`${
              description === 'Heading'
                ? 'col-span-2'
                : 'col-span-2 sm:col-span-1'
            }  flex items-start justify-between space-x-16 text-black`}
          >
            {description !== 'Heading' ? (
              <>
                <div>
                  <p className="text-lg font-bold">{itemName}</p>
                  <p className="mt-1 text-sm leading-tight ">{description}</p>
                </div>
                <p className="text-lg font-bold sm:whitespace-nowrap">
                  {price}
                </p>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-semibold uppercase">{itemName}</h3>
              </>
            )}
          </div>
        ))}
      </div>
    </TabPanel>
  );
}

export { Menu };
