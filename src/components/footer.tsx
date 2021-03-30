import { Link } from 'gatsby';
import * as React from 'react';

import config from '../../config.json';
import { NavItems, useSiteNavigation } from '../hooks/use-site-navigation';
import { SiteSettings, useSiteSettings } from '../hooks/use-site-settings';
import { Logo } from '../icons/logo';
import { ICON_MAP } from '../lib/icon-map';

function Footer(): React.ReactElement {
  const siteSettings: SiteSettings = useSiteSettings();
  const siteNavigation: NavItems = useSiteNavigation();
  return (
    <footer aria-labelledby="footerHeading" className="relative bg-white">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto max-w-screen-2xl sm:px-6 lg:py-16 lg:px-8">
        <div className="grid items-start lg:grid-cols-2">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="grid col-span-1">
              <Link
                to="/"
                className="max-w-xs text-white transition duration-150 ease-in-out hover:text-gray-300"
              >
                <span className="sr-only">{siteSettings.title}</span>
                <Logo aria-hidden className="fill-current" />
              </Link>
            </div>
          </div>
          <div className="grid mt-16 lg:mt-0 md:grid-cols-2 lg:border-l lg:border-white lg:border-opacity-25 lg:pl-8">
            <div>
              <nav className="space-y-4">
                {siteNavigation.map(({ label, route, id }) => (
                  <div key={id} className="text-sm">
                    <Link
                      to={route.current}
                      className="font-medium tracking-wider uppercase transition duration-150 ease-in-out hover:underline hover:text-gray-500"
                    >
                      {label}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
            <div className="space-y-4">
              <dl className="space-y-4">
                <div>
                  <dt className="inline font-semibold tracking-wider">
                    Phone:{' '}
                  </dt>
                  <dd className="inline">
                    <a
                      href={`tel:${siteSettings.phoneNumber}`}
                      className="transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
                    >
                      {siteSettings.phoneNumber}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold tracking-wider">
                    Email:{' '}
                  </dt>
                  <dd className="inline">
                    <a
                      href={`mailto:${siteSettings.email}`}
                      className="transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
                    >
                      {siteSettings.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold tracking-wider">
                    Address:{' '}
                  </dt>
                  <dd className="inline">
                    <a
                      href={siteSettings.address.googleMaps.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
                    >
                      {siteSettings.address.streetAddress},{' '}
                      <span className="inline-block hover:underline">
                        {siteSettings.address.suburb}
                      </span>
                    </a>
                  </dd>
                </div>
              </dl>
              {siteSettings.socialLinks.map(({ link, socialNetwork }) => {
                const Icon = ICON_MAP[socialNetwork];
                return (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gray-500 transition duration-150 ease-in-out hover:text-gray-400 focus:text-gray-600"
                  >
                    <span className="sr-only">{socialNetwork}</span>
                    <Icon aria-hidden className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="items-center pt-8 mt-16 border-t border-opacity-25 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base md:mt-0 md:order-1">
            <a
              href="https://www.phirannodesigns.com.au/"
              className="transition duration-150 ease-in-out hover:text-gray-500 hover:underline group"
            >
              Website by{' '}
              <span className="font-semibold group-hover:text-gray-500">
                Phiranno Designs
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
