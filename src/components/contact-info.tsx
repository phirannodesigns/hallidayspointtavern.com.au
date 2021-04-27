import * as React from 'react';

import { useSiteSettings } from '../hooks/use-site-settings';
import { ICON_MAP } from '../lib/icon-map';
import { Copy } from './copy';

function ContactInfo(): React.ReactElement {
  const siteSettings = useSiteSettings();
  return (
    <Copy heading={{ eyebrow: 'Have an enquiry?', main: 'Contact Us' }}>
      <h3 className="uppercase !mb-0 !text-white">Contact Details</h3>
      <div className="mt-2 prose text-white">
        <p>
          {siteSettings.phoneNumber}
          <br />
          {siteSettings.email}
        </p>
      </div>
      <h3 className="uppercase !mb-0 !text-white">Open Hours</h3>
      <div className="mt-2 prose text-white">
        <p>Monday to Sunday</p>
      </div>
      <h3 className="uppercase !mb-0 !text-white">Find us at</h3>
      <div className="mt-2 prose text-white">
        <p>
          {siteSettings.address.streetAddress}
          <br />
          {siteSettings.address.suburb}
        </p>
      </div>
      <h3 className="uppercase !mb-0 !text-white">Follow us on</h3>
      {siteSettings.socialLinks.map(({ link, socialNetwork }) => {
        const Icon = ICON_MAP[socialNetwork];
        return (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-gray-500 transition duration-150 ease-in-out hover:text-gray-400 focus:text-gray-600"
          >
            <span className="sr-only">{socialNetwork}</span>
            <Icon aria-hidden className="w-8 h-8 text-white" />
          </a>
        );
      })}
    </Copy>
  );
}

export { ContactInfo };
