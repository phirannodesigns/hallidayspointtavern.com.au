import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import { Copy } from '../components/copy';
import { Layout } from '../components/layout';
import { Menu } from '../components/menu';
import { OverlappingImageWrapper } from '../components/overlapping-image-wrapper';
import { SEO } from '../components/seo';
import { SideBySide } from '../components/side-by-side';
import logo from '../images/reschs-logo.svg';

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
  return (
    <SideBySide
      background={
        <div className="absolute inset-0 flex">
          <StaticImage
            src="../images/menu.jpg"
            alt=""
            className="flex-1 object-cover"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-black bg-opacity-75 pointer-events-none"
          />
        </div>
      }
    >
      <SideBySide.ThreeCols>
        <Copy
          heading={{
            eyebrow: 'Come check out',
            main: 'Our Delicious Menu',
            underlineColor: 'olive',
          }}
          lead="Hallidays Point Tavern is a unique casual restaurant featuring a diverse menu, and enjoy a full bar selection of wines and spirits or beer."
        >
          <p>
            Hallidays Point Tavern is a unique casual restaurant featuring a
            diverse menu, and enjoy a full bar selection of wines and spirits or
            beer.
          </p>
          <p>
            Our menu offers you a vast array of delectable meals to choose from,
            anytime from a late morning brunch of coffee/cake, to our main meals
            of lunch and dinner till midnight. The Tavern’s distinct menu has
            our local clients craving making us one of the best restaurants in
            Hallidays Point. Enjoy your meal in our cozy, bistro ambience that
            is comfy, warm and welcoming.
          </p>
          <p>
            Sit back, relax, and let us show you why our patrons brand us as one
            of the best restaurants in Hallidays Point, New South Wales.
          </p>
        </Copy>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <OverlappingImageWrapper>
          <figure className="flex flex-col w-full pb-12 mx-auto prose text-center text-white max-w-none">
            <StaticImage
              src="../images/dine-and-discover-nsw.jpg"
              alt=""
              className="max-w-xs mx-auto max-h-48"
              objectFit="contain"
            />
            <figcaption className="mt-5 font-medium">
              Dine &amp; Discover <br />
              voucher accepted here 7 days a week
            </figcaption>
          </figure>
          <figure className="flex flex-col w-full pb-12 mx-auto prose text-center text-white max-w-none">
            <img
              src={logo}
              alt=""
              className="max-w-xs mx-auto !mb-0 max-h-48"
            />
            <figcaption className="mt-5 font-medium">
              Preferred venue of the <br />
              <a href="/" className="!text-white">
                Resch's Appreciation society
              </a>
            </figcaption>
          </figure>
        </OverlappingImageWrapper>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}

export default MenuPage;
