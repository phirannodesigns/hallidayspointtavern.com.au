import * as React from 'react';

import { Heading } from '../components/ui/heading';
import { Link } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { ContactSection } from '../components/contact-section';
import { GoogleMap } from '../components/google-map';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { SideBySide } from '../components/side-by-side';
import { Menu } from '../components/menu';
import { LogoWhite } from '../icons/logo-white';
import { useGraphQL } from '../hooks/use-graphql';
import { ImageWithText } from '../components/image-with-text';
import { ClippedBackground } from '../components/clipped-background';

function MenuPage(): React.ReactElement {
  return (
    <>
      <SEO title="Menu" />
      <Layout>
        <OurMenu />
        <Menu />
      </Layout>
    </>
  );
}

function OurMenu() {
  const { landingWelcomeImage } = useGraphQL();

  return (
    <SideBySide
      background={
        <div className="absolute inset-0 flex">
          <div className="absolute inset-0 flex">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1914&q=80"
              alt=""
              className="flex-1 object-cover"
            />
          </div>
          <div className="absolute inset-0 flex">
            <ClippedBackground className="flex-1" />
          </div>
        </div>
      }
    >
      <SideBySide.TwoCols>
        {' '}
        <div className="p-6 sm:p-24">
          <Heading underlineColor="olive">
            <Heading.Eyebrow>Come check out</Heading.Eyebrow>
            <Heading.Main>Our Delicious Menu</Heading.Main>
          </Heading>
          <h2 className="mt-6 text-xl prose text-white sm:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
            provident expedita. Earum itaque tempora fugiat.
          </h2>
          <div className="mt-6 prose text-white">
            <p>
              The Hallidays Point Tavern is a unique casual restaurant featuring
              a diverse menu, and enjoy a full bar selection of wines and
              spirits or beer.
              <br />
              <br />
              Our menu offers you a vast array of delectable meals to choose
              from, anytime from a late morning brunch of coffee/cake, to our
              main meals of lunch and dinner till midnight. The Tavern’s
              distinct menu has our local clients craving making us one of the
              best restaurants in Hallidays Point. Enjoy your meal in our cozy,
              bistro ambience that is comfy, warm and welcoming.
              <br />
              <br />
              Sit back, relax, and let us show you why our patrons brand us as
              one of the best restaurants in Hallidays Point, New South Wales.
            </p>
          </div>
        </div>
      </SideBySide.TwoCols>
      <SideBySide.ThreeCols></SideBySide.ThreeCols>
    </SideBySide>
  );
}

export default MenuPage;
