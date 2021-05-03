import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import { Copy } from '../components/copy';
import { Layout } from '../components/layout';
import { Menu } from '../components/menu';
import { SEO } from '../components/seo';
import { SideBySide } from '../components/side-by-side';

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
          lead="The Hallidays Point Tavern is a unique casual restaurant featuring a diverse menu, and enjoy a full bar selection of wines and spirits or beer."
        >
          <p>
            The Hallidays Point Tavern is a unique casual restaurant featuring a
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
          {/* // TODO: Add Reschs Appreciation Society link/CTA here */}
        </Copy>
      </SideBySide.ThreeCols>
      <span aria-hidden className="lg:col-span-2" />
    </SideBySide>
  );
}

export default MenuPage;
