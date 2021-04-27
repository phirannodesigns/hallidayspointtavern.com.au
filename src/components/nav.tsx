import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import * as React from 'react';

import {
  NavItem,
  NavItems,
  useSiteNavigation,
} from '../hooks/use-site-navigation';
import { SiteSettings, useSiteSettings } from '../hooks/use-site-settings';
import { Logo } from '../icons/logo';

function Nav(): React.ReactElement {
  const siteSettings: SiteSettings = useSiteSettings();
  const siteNavigation: NavItems = useSiteNavigation();

  const navItems = siteNavigation.filter(({ footerOnly }) => !footerOnly);

  const half = Math.ceil(navItems.length / 2);

  const firstHalf = navItems.splice(0, half);
  const secondHalf = navItems.splice(-half);

  return (
    <Popover
      as="header"
      className="sticky inset-x-0 top-0 z-10 bg-white bg-opacity-80 backdrop-filter backdrop-blur-md"
    >
      {({ open }) => (
        <>
          <div className="relative z-20">
            <nav className="flex flex-wrap items-center justify-between px-4 py-5 mx-auto md:items-baseline md:justify-center max-w-screen-2xl sm:px-6 sm:py-4 lg:px-12 md:space-x-10">
              {firstHalf.map((navItem) => (
                <NavLink key={navItem.route.current} navItem={navItem} />
              ))}
              <div>
                <Link
                  to="/"
                  className="inline-flex transform md:mx-auto md:translate-y-1"
                >
                  <span className="sr-only">{siteSettings.title}</span>
                  <Logo aria-hidden className="w-auto h-12 sm:h-16" />
                </Link>
              </div>
              {secondHalf.map((navItem) => (
                <NavLink key={navItem.route.current} navItem={navItem} />
              ))}
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon aria-hidden className="w-6 h-6" />
                </Popover.Button>
              </div>
            </nav>
          </div>
          <MobileMenu open={open} />
        </>
      )}
    </Popover>
  );
}

function NavLink({ navItem }: { navItem: NavItem }): React.ReactElement | null {
  const { pathname } = useLocation();
  return (
    <Link
      key={navItem.label}
      to={`/${navItem.route.current}/`}
      className={`hidden text-base font-medium uppercase md:inline-block ${
        pathname === navItem.route.current ? 'text-teal' : 'text-blue-light'
      } hover:text-gray-900`}
    >
      {navItem.label}
    </Link>
  );
}

function MobileMenu({ open }) {
  const siteNavigation: NavItems = useSiteNavigation();
  const siteSettings: SiteSettings = useSiteSettings();

  return (
    <Transition
      show={open}
      as={React.Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        static
        className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
      >
        <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
          <div className="flex items-center justify-between px-5 pt-4">
            <div>
              <Link
                to="/"
                className="block transition duration-150 ease-in-out hover:opacity-75"
              >
                <span className="sr-only">{siteSettings.title}</span>
                <Logo className="w-auto h-12 sm:h-16" />
              </Link>
            </div>
            <div className="-mr-2">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset">
                <span className="sr-only">Close menu</span>
                <XIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3">
            {siteNavigation.map(({ id, route, label }) => (
              <Link
                key={id}
                to={`/${route.current}/`}
                className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
              >
                {label}
              </Link>
            ))}
          </div>
          <a
            href={`tel:${siteSettings.phoneNumber}`}
            className="block w-full px-5 py-3 font-medium text-center text-white transition duration-150 ease-in-out bg-blue hover:bg-blue-light"
          >
            {siteSettings.phoneNumber}
          </a>
        </div>
      </Popover.Panel>
    </Transition>
  );
}

export { Nav };
