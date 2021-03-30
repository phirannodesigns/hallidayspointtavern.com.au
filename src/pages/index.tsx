import * as React from 'react';

import { ContactSection } from '../components/contact-section';
import { GoogleMap } from '../components/google-map';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { LogoWhite } from '../icons/logo-white';

function IndexPage(): React.ReactElement {
  return (
    <>
      <SEO title="Home" />
      <Layout hero={<Hero />}>
        <ContactSection />
        <GoogleMap />
      </Layout>
    </>
  );
}

function Hero() {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <div className="flex bg-teal-transparent">
        {/* image goes here */}
        <div className="flex items-center justify-center flex-1 px-4 sm:px-6 lg:px-8">
          <LogoWhite className="w-full max-w-4xl mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
