import * as React from 'react';

import { Heading } from '../components/ui/heading';
import { Link } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { ContactSection } from '../components/contact-section';
import { GoogleMap } from '../components/google-map';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { SideBySide } from '../components/side-by-side';
import { LogoWhite } from '../icons/logo-white';
import { useGraphQL } from '../hooks/use-graphql';
import { ImageWithText } from '../components/image-with-text';
import { ClippedBackground } from '../components/clipped-background';

function PrivacyPolicyPage(): React.ReactElement {
  return (
    <>
      <SEO title="Privacy Policy" />
      <Layout>
        <GoogleMap />
      </Layout>
    </>
  );
}

export default PrivacyPolicyPage;
