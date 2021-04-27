import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import { ContactForm } from '../components/contact-form';
import { ContactInfo } from '../components/contact-info';
import { GoogleMap } from '../components/google-map';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { SideBySide } from '../components/side-by-side';

function ContactPage(): React.ReactElement {
  return (
    <>
      <SEO title="Contact" />
      <Layout>
        <ContactSection />
        <GoogleMap />
      </Layout>
    </>
  );
}

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
          <div
            aria-hidden
            className="absolute inset-0 bg-teal bg-opacity-[0.85]"
          />
        </div>
      }
    >
      <SideBySide.TwoCols>
        <ContactInfo />
      </SideBySide.TwoCols>
      <SideBySide.ThreeCols>
        <ContactForm />
      </SideBySide.ThreeCols>
    </SideBySide>
  );
}

export default ContactPage;
