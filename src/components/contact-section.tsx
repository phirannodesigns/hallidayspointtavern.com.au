import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import { ContactForm } from './contact-form';
import { ContactInfo } from './contact-info';
import { SideBySide } from './side-by-side';

function ContactSection(): React.ReactElement {
  return (
    <SideBySide
      background={
        <div className="absolute inset-0 flex">
          <StaticImage
            src="../images/contact-background.jpg"
            alt=""
            className="flex-1"
          />
          <div aria-hidden className="absolute inset-0 bg-teal-transparent" />
        </div>
      }
    >
      <SideBySide.TwoCols>
        <ContactForm />
      </SideBySide.TwoCols>
      <SideBySide.ThreeCols>
        <ContactInfo />
      </SideBySide.ThreeCols>
    </SideBySide>
  );
}

export { ContactSection };
