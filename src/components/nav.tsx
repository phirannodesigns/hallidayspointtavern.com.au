import { Transition } from '@headlessui/react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import * as React from 'react';
import { HiMenu } from 'react-icons/hi';
import OutsideClickHandler from 'react-outside-click-handler';

import {
  NavItem,
  NavItems,
  useSiteNavigation,
} from '../hooks/use-site-navigation';
import { SiteSettings, useSiteSettings } from '../hooks/use-site-settings';
import { Logo } from '../icons/logo';

function Nav(): React.ReactElement {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);
  const siteSettings: SiteSettings = useSiteSettings();
  const siteNavigation: NavItems = useSiteNavigation();

  const navItems = siteNavigation.filter(({ footerOnly }) => !footerOnly);

  const half = Math.ceil(navItems.length / 2);

  const firstHalf = navItems.splice(0, half);
  const secondHalf = navItems.splice(-half);

  return (
    <header className="sticky inset-x-0 top-0 z-10 bg-white">
      <div className="relative z-20">
        <nav className="flex flex-wrap items-center justify-between px-4 py-5 mx-auto md:items-baseline md:justify-center max-w-screen-2xl sm:px-6 sm:py-4 lg:px-8 md:space-x-10">
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
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={toggle}
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              <HiMenu aria-hidden className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>
      <MobileMenu isOpen={isOpen} toggle={toggle} />
    </header>
  );
}

function NavLink({ navItem }: { navItem: NavItem }): React.ReactElement | null {
  const { pathname } = useLocation();

  return (
    <Link
      key={navItem.label}
      to={navItem.route.current}
      className={`hidden text-base font-medium uppercase md:inline-block ${
        pathname === navItem.route.current ? 'text-teal' : 'text-blue-light'
      } hover:text-gray-900`}
    >
      {navItem.label}
    </Link>
  );
}

function MobileMenu({ isOpen, toggle }) {
  const siteNavigation: NavItems = useSiteNavigation();
  const siteSettings: SiteSettings = useSiteSettings();

  const handleEscape = React.useCallback(
    (event) => {
      if (event.key === 'Escape') {
        toggle();
      }
    },
    [toggle]
  );

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          toggle();
        }
      });
    }
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [toggle, handleEscape]);

  return (
    <Transition
      show={isOpen}
      enterFrom="duration-200 ease-out"
      enter="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
      className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
    >
      <OutsideClickHandler onOutsideClick={toggle}>
        <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
          <div className="px-5 pt-5 pb-6 sm:pb-8">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                onClick={toggle}
                className="block transition duration-150 ease-in-out hover:opacity-75"
              >
                <span className="sr-only">{siteSettings.title}</span>
                <Logo className="w-auto h-8" />
              </Link>
              <div className="-mr-2">
                <button
                  type="button"
                  onClick={toggle}
                  className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset"
                >
                  <span className="sr-only">Close menu</span>
                  {/* Heroicon name: outline/x */}
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="px-5 py-6">
            <nav className="grid grid-cols-2 gap-4">
              {siteNavigation.map(({ id, route, label }) => (
                <Link
                  key={id}
                  to={route.current}
                  onClick={toggle}
                  className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-6">
              <a
                href={`tel:${siteSettings.phoneNumber}`}
                className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm bg-blue hover:bg-blue-light"
              >
                {siteSettings.phoneNumber}
              </a>
              <p className="mt-6 text-base font-medium text-center text-gray-500">
                Call us today
              </p>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </Transition>
  );
}

export { Nav };
