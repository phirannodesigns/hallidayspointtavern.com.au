import * as React from 'react';

import { Heading } from '../components/ui/heading';
import { Link } from 'gatsby';
import { ContactForm } from './contact-form';
import { SideBySide } from './side-by-side';
import { SiteSettings, useSiteSettings } from '../hooks/use-site-settings';
import { ICON_MAP } from '../lib/icon-map';

function ContactSection(): React.ReactElement {
  const siteSettings: SiteSettings = useSiteSettings();
  return (
    <SideBySide bgColorClass="bg-teal-transparent">
      <SideBySide.TwoCols>
        <ContactForm />
      </SideBySide.TwoCols>
      <SideBySide.ThreeCols>
        <div className="p-6 sm:p-24">
          <Heading>
            <Heading.Eyebrow>Have an enquiry?</Heading.Eyebrow>
            <Heading.Main>Contact Us</Heading.Main>
          </Heading>
          <h2 className="mt-6 text-xl prose text-white uppercase sm:text-2xl">
            Contact Details
          </h2>
          <div className="mt-2 prose text-white">
            <p>
              {siteSettings.phoneNumber}
              <br />
              {siteSettings.email}
            </p>
          </div>
          <h2 className="mt-6 text-xl prose text-white uppercase sm:text-2xl">
            Open Hours
          </h2>
          <div className="mt-2 prose text-white">
            <p>Monday to Sunday</p>
          </div>
          <h2 className="mt-6 text-xl prose text-white uppercase sm:text-2xl">
            Find us at
          </h2>
          <div className="mt-2 prose text-white">
            <p>
              {siteSettings.address.streetAddress}
              <br />
              {siteSettings.address.suburb}
            </p>
          </div>
          <h2 className="mt-6 text-xl prose text-white uppercase sm:text-2xl">
            Follow us on
          </h2>

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
                <Icon aria-hidden className="w-12 h-12 text-white" />
              </a>
            );
          })}
        </div>
      </SideBySide.ThreeCols>
    </SideBySide>
  );
}

export { ContactSection };
