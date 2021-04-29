import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import { ContactSection } from '../components/contact-section';
import { Copy } from '../components/copy';
import { GoogleMap } from '../components/google-map';
import { Hero as HeroComponent } from '../components/hero';
import { Layout } from '../components/layout';
import { OverlappingImageWrapper } from '../components/overlapping-image-wrapper';
import { SEO } from '../components/seo';
import { SideBySide } from '../components/side-by-side';
import { LogoWhite } from '../icons/logo-white';

function IndexPage(): React.ReactElement {
  return (
    <>
      <SEO title="Home" />
      <Layout hero={<Hero />}>
        <Welcome />
        <OurMenu />
        <ExcitingEvents />
        <DiscoverHallidaysPoint />
        <CourtesyBus />
        <ContactSection />
        <GoogleMap />
      </Layout>
    </>
  );
}

function Hero() {
  return (
    <HeroComponent
      backgroundImage={
        <StaticImage src="../images/hero.jpg" alt="" className="flex-1" />
      }
    >
      <LogoWhite className="w-full max-w-4xl mx-auto" />
    </HeroComponent>
  );
}

function Welcome() {
  return (
    <SideBySide>
      <SideBySide.ThreeCols>
        <div className="absolute inset-0 flex">
          <StaticImage src="../images/wallaby.jpg" alt="" className="flex-1" />
        </div>
        <Copy
          heading={{ eyebrow: 'Welcome To', main: 'Hallidays Point Tavern' }}
          lead="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, provident expedita. Earum itaque tempora fugiat."
          cta={{ route: '/about-us/', text: 'Read more' }}
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
        <OverlappingImageWrapper>
          <StaticImage src="../images/welcome.jpg" alt="" />
        </OverlappingImageWrapper>
      </SideBySide.TwoCols>
    </SideBySide>
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
      <span aria-hidden className="lg:col-span-2" />
      <SideBySide.ThreeCols>
        <Copy
          heading={{
            eyebrow: 'Come check out',
            main: 'Our Delicious Menu',
            underlineColor: 'olive',
          }}
          lead="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, provident expedita. Earum itaque tempora fugiat."
          cta={{ route: '/menu/', text: 'See Menu' }}
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
        </Copy>
      </SideBySide.ThreeCols>
    </SideBySide>
  );
}

function ExcitingEvents() {
  return (
    <SideBySide>
      <SideBySide.ThreeCols>
        <Copy
          heading={{
            eyebrow: 'Keep up with our',
            main: 'Exciting Events',
            underlineColor: 'olive',
          }}
          lead="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, provident expedita. Earum itaque tempora fugiat."
          cta={{ route: '/events/', text: 'Upcoming Events' }}
          backgroundColour="cream"
          onDark={false}
        >
          <ul className="divide-y divide-gray-700 reset-list">
            <li className="py-4">
              <h3>Raffles Every Monday &amp; Thursdays 5pm – 6:30pm</h3>
              <p>
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </li>
            <li className="py-4">
              <h3>Valentines Day Date Night – 14th Feb</h3>
              <p>Quis ipsum suspendisse ultrices gravida.</p>
            </li>
            <li className="py-4">
              <h3>Friday Night Live Music – Acoustic Andy | 19th Feb</h3>
            </li>
            <li className="py-4">
              <h3>Sunday Sesh – AJ & Annie 21st Feb</h3>
            </li>
          </ul>
        </Copy>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <OverlappingImageWrapper>
          <StaticImage src="../images/events.jpg" alt="" />
        </OverlappingImageWrapper>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}

function DiscoverHallidaysPoint() {
  return (
    <div className="relative w-full mx-auto max-w-screen-2xl">
      <div className="absolute inset-0 flex overflow-hidden">
        <StaticImage
          src="../images/discover-hallidays-point.jpg"
          alt=""
          className="flex-1"
        />
      </div>
      <div className="relative flex items-center justify-center px-4 py-64 bg-black bg-opacity-50 sm:px-6 lg:px-12">
        <div className="text-center">
          <p className="text-3xl text-white">What are you waiting for?</p>
          <h2 className="block text-5xl font-black text-white sm:text-5xl sm:whitespace-nowrap">
            Discover Hallidays Point
          </h2>
          <div className="mt-6">
            <Link
              to="/about"
              className="px-12 py-2 tracking-wide text-white uppercase bg-transparent border border-white"
            >
              Discover more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function CourtesyBus() {
  return (
    <SideBySide id="courtesy_bus">
      <SideBySide.ThreeCols>
        <div className="absolute inset-0 flex overflow-hidden">
          <StaticImage
            src="../images/headlands.jpg"
            alt=""
            className="flex-1"
          />
        </div>
        <Copy
          heading={{
            eyebrow: 'Don’t want to drive?',
            main: 'Get the Courtesy Bus',
            underlineColor: 'olive',
          }}
          lead="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, provident expedita. Earum itaque tempora fugiat."
          backgroundColour="transparent-black"
        >
          <dl className="divide-y-2 divide-white">
            <div className="py-4 text-lg font-semibold prose text-white sm:text-xl">
              <dt className="inline">Monday - Thursdays, </dt>
              <dd className="inline">6pm - 10:30pm</dd>
            </div>
            <div className="py-4 text-lg font-semibold prose text-white sm:text-xl">
              <dt className="inline">Fridays &amp; Saturdays, </dt>
              <dd className="inline">7pm - 12am</dd>
            </div>
            <div className="py-4 text-lg font-semibold prose text-white sm:text-xl">
              <dt className="inline">Sunday - </dt>
              <dd className="inline">Not Operating</dd>
            </div>
          </dl>
        </Copy>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <OverlappingImageWrapper>
          <StaticImage src="../images/courtesy-bus.jpg" alt="" />
        </OverlappingImageWrapper>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}

export default IndexPage;
