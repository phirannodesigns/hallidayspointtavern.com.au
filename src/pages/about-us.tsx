import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import { Copy } from '../components/copy';
import { GoogleMap } from '../components/google-map';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { SideBySide } from '../components/side-by-side';

function AboutPage(): React.ReactElement {
  return (
    <>
      <SEO title="About" />
      <Layout>
        <About1 />
        <About2 />
        <OurHistory />
        <GoogleMap />
      </Layout>
    </>
  );
}

function About1() {
  return (
    <SideBySide>
      <SideBySide.ThreeCols>
        <div className="absolute inset-0 flex">
          <StaticImage src="../images/wallaby.jpg" alt="" className="flex-1" />
        </div>
        <Copy
          heading={{ eyebrow: 'About The', main: 'Hallidays Point Tavern' }}
          lead="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, provident expedita. Earum itaque tempora fugiat."
          backgroundColour="transparent-teal"
        >
          <p>
            At the Tavern, we are focused on delivering the best customer
            experience by combining great food, exquisite wines and beer, and
            matched with excellent customer service.
          </p>
          <p>
            The Hallidays Point Tavern is located at the heart of Hallidays
            Point in New South Wales which is a popular destination for its
            spectacular coastal towns and rainforests.
          </p>
          <p>
            For more than 30 years, the Tavern has been a favourite spot for
            locals and tourists to enjoy a delightful meal, to relax over a few
            schooners of beer or have fun with friends and families. Talk to us
            about hosting your function today.
          </p>
        </Copy>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <div className="transform lg:-translate-x-24">
          <StaticImage src="../images/welcome.jpg" alt="" className="flex-1" />
        </div>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}

function About2() {
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
      <SideBySide.TwoCols>
        <div className="px-4 py-12 sm:px-6 lg:px-12 lg:py-24">
          <StaticImage src="../images/welcome.jpg" alt="" className="flex-1" />
        </div>
      </SideBySide.TwoCols>
      <SideBySide.ThreeCols>
        <Copy>
          <p>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
            quo voluptas nulla pariatur.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Quis ipsum suspendisse. ultrices gravida.
            Risus commodo viverra maecenas accumsan lacus vel facilisis. Sed ut
            perspiciatis unde omnis iste natus errot sit voluptatem accusantium
            doloremque laudantium, totam rer aperiam, eaque ipsa quae ab illo
            inventore
          </p>
        </Copy>
      </SideBySide.ThreeCols>
    </SideBySide>
  );
}

function OurHistory(): React.ReactElement {
  return (
    <SideBySide>
      <SideBySide.ThreeCols>
        <div className="absolute inset-0 flex">
          <StaticImage src="../images/wallaby.jpg" alt="" className="flex-1" />
        </div>
        <Copy
          heading={{
            eyebrow: 'Learn About',
            main: 'Our History',
            underlineColor: 'olive',
          }}
          lead="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, provident expedita. Earum itaque tempora fugiat."
          backgroundColour="cream"
          onDark={false}
        >
          <p>
            At the Tavern, we are focused on delivering the best customer
            experience by combining great food, exquisite wines and beer, and
            matched with excellent customer service.
          </p>
          <p>
            The Hallidays Point Tavern is located at the heart of Hallidays
            Point in New South Wales which is a popular destination for its
            spectacular coastal towns and rainforests.
          </p>
          <p>
            For more than 30 years, the Tavern has been a favourite spot for
            locals and tourists to enjoy a delightful meal, to relax over a few
            schooners of beer or have fun with friends and families. Talk to us
            about hosting your function today.
          </p>
        </Copy>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <div className="transform lg:-translate-x-24">
          <StaticImage src="../images/welcome.jpg" alt="" className="flex-1" />
        </div>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}

export default AboutPage;
