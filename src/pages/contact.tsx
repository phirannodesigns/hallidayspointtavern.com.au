import * as React from 'react';

import { ContactSectionRev } from '../components/contact-section-rev';
import { GoogleMap } from '../components/google-map';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

function ContactPage(): React.ReactElement {
  return (
    <>
      <SEO title="Contact" />
      <Layout>
        <ContactSectionRev />
        <GoogleMap />
      </Layout>
    </>
  );
}

export default ContactPage;
