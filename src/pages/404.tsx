import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import { Copy } from '../components/copy';
import { GoogleMap } from '../components/google-map';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { SideBySide } from '../components/side-by-side';

function NotFoundPage(): React.ReactElement {
  return (
    <>
      <SEO title="404: Page Not Found" />
      <Layout>
        <NotFound />
        <GoogleMap />
      </Layout>
    </>
  );
}

function NotFound() {
  return (
    <SideBySide>
      <SideBySide.ThreeCols>
        <div className="absolute inset-0 flex">
          <StaticImage
            src="../images/contact-background.jpg"
            alt=""
            className="flex-1"
          />
        </div>
        <Copy
          heading={{ eyebrow: 'Welcome To', main: '404: Page Not Found' }}
          cta={{ route: '/', text: 'Return Home' }}
          backgroundColour="transparent-olive"
        />
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <div className="py-24 transform lg:-translate-x-24">
          <StaticImage src="../images/hero.jpg" alt="" className="flex-1" />
        </div>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}

export default NotFoundPage;
