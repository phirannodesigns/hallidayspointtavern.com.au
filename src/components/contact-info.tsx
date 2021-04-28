import { OutboundLink } from 'gatsby-plugin-google-gtag';
import * as React from 'react';

import { useSiteSettings } from '../hooks/use-site-settings';
import { ICON_MAP } from '../lib/icon-map';
import { Copy } from './copy';

function ContactInfo(): React.ReactElement {
  const siteSettings = useSiteSettings();
  return (
    <Copy
      heading={{ eyebrow: 'Have an enquiry?', main: 'Contact Us' }}
      maxWidth="max-w-prose"
    >
      <h3 className="uppercase !mb-0 !text-white">Contact Details</h3>
      <dl className="mt-2">
        <div>
          <dt className="sr-only">Phone number</dt>
          <dd>
            <a href={`tel:${siteSettings.phoneNumber}`} className="!text-white">
              {siteSettings.phoneNumber}
            </a>
          </dd>
        </div>
        <div>
          <dt className="sr-only">Email address</dt>
          <dd>
            <a href={`mailto:${siteSettings.email}`} className="!text-white">
              {siteSettings.email}
            </a>
          </dd>
        </div>
      </dl>
      <h3 className="uppercase !mb-0 !text-white">Open Hours</h3>
      <dl className="mt-2">
        {siteSettings.hours.map(({ days, hours }) => (
          <div key={days} className="font-medium">
            <dt className="inline">{days}: </dt>
            <dd className="inline">{hours}</dd>
          </div>
        ))}
      </dl>
      <h3 className="uppercase !mb-0 !text-white">Find us at</h3>
      <dl className="mt-2">
        <dt className="sr-only">Address</dt>
        <dd>
          <a
            href={siteSettings.address.googleMaps.link}
            rel="noopener noreferrer"
            className="!text-white"
          >
            {siteSettings.address.streetAddress}
            <br />
            {siteSettings.address.suburb}
          </a>
        </dd>
      </dl>
      <h3 className="uppercase !mb-0 !text-white">Follow us on</h3>
      <ul className="mt-2 reset-list">
        {siteSettings.socialLinks.map(({ link, socialNetwork }) => {
          const Icon = ICON_MAP[socialNetwork];
          return (
            <li key={link} className="!my-0">
              <OutboundLink
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block !mb-0 !mt-2 text-gray-500 transition duration-150 ease-in-out hover:text-gray-400 focus:text-gray-600"
              >
                <span className="sr-only">{socialNetwork}</span>
                <Icon aria-hidden className="w-8 h-8 text-white" />
              </OutboundLink>
            </li>
          );
        })}
      </ul>
    </Copy>
  );
}

export { ContactInfo };
