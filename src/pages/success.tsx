import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import { Copy } from '../components/copy';
import { GoogleMap } from '../components/google-map';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { SideBySide } from '../components/side-by-side';

function SuccessPage(): React.ReactElement {
  return (
    <>
      <SEO title="Success" />
      <Layout>
        <Success />
        <GoogleMap />
      </Layout>
    </>
  );
}

function Success() {
  return (
    <SideBySide>
      <SideBySide.ThreeCols>
        <div className="absolute inset-0 flex">
          <StaticImage
            src="../images/headlands.jpg"
            alt=""
            className="flex-1"
          />
        </div>
        <Copy
          heading={{ eyebrow: 'Success', main: 'Message received!' }}
          lead="Thank you, our team will get back to you shortly."
          cta={{ route: '/', text: 'Return Home' }}
          backgroundColour="transparent-olive"
        />
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <div className="py-24 transform lg:-translate-x-24">
          <StaticImage
            src="../images/success-image.jpg"
            alt=""
            className="flex-1"
          />
        </div>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}

export default SuccessPage;
