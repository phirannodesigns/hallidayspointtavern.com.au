import * as React from 'react';

import { Heading } from '../components/ui/heading';
import { Link } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { ContactSectionRev } from '../components/contact-section-rev';
import { GoogleMap } from '../components/google-map';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { SideBySide } from '../components/side-by-side';
import { LogoWhite } from '../icons/logo-white';
import { useGraphQL } from '../hooks/use-graphql';
import { ImageWithText } from '../components/image-with-text';
import { ClippedBackground } from '../components/clipped-background';

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

function DiscoverHallidaysPoint() {
  return (
    <div
      className={`relative w-full px-4 mx-auto bg-teal-transparent max-w-screen-2xl sm:px-6 lg:px-8`}
    >
      <div className="flex items-center justify-center py-64">
        <div className="text-center">
          <p className="text-3xl text-white">What are you waiting for?</p>
          <h2 className="block text-5xl font-black text-white sm:text-5xl sm:whitespace-nowrap">
            Discover Halliday's Point
          </h2>
          <div className="mt-6">
            <Link
              to="/about"
              className="px-12 py-2 font-serif tracking-wide text-white uppercase bg-transparent border border-white"
            >
              Discover more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
function Welcome() {
  return (
    <SideBySide>
      <SideBySide.ThreeCols bgColorClass="bg-teal-transparent">
        <div className="p-6 sm:p-24">
          <Heading>
            <Heading.Eyebrow>Welcome To</Heading.Eyebrow>
            <Heading.Main>Hallidays Point Tavern</Heading.Main>
          </Heading>
          <h2 className="mt-6 text-xl prose text-white sm:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
            provident expedita. Earum itaque tempora fugiat.
          </h2>
          <div className="mt-6 prose text-white">
            <p>
              At the Tavern, we are focused on delivering the best customer
              experience by combining great food, exquisite wines and beer, and
              matched with excellent customer service.
              <br />
              <br />
              The Hallidays Point Tavern is located at the heart of Hallidays
              Point in New South Wales which is a popular destination for its
              spectacular coastal towns and rainforests.
              <br />
              <br />
              For more than 30 years, the Tavern has been a favourite spot for
              locals and tourists to enjoy a delightful meal, to relax over a
              few schooners of beer or have fun with friends and families. Talk
              to us about hosting your function today.
            </p>
          </div>
          <div className="flex justify-start mt-8">
            <Link
              to="/about"
              className="px-6 py-2 font-serif tracking-wide text-white uppercase bg-black-transparent"
            >
              Read more
            </Link>
          </div>
        </div>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <div className="lg:py-24 lg:-ml-24">
          <StaticImage
            src="../images/landing-welcome.jpg"
            alt=""
            className="flex-1"
          />
        </div>
      </SideBySide.TwoCols>
    </SideBySide>
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
      <SideBySide.TwoCols>{/*  */}</SideBySide.TwoCols>
      <SideBySide.ThreeCols>
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
          <div className="flex justify-start mt-8">
            <Link
              to="/about"
              className="px-6 py-2 font-serif tracking-wide text-white uppercase bg-olive"
            >
              See Menu
            </Link>
          </div>
        </div>
      </SideBySide.ThreeCols>
    </SideBySide>
  );
}

function CourtesyBus() {
  const { landingWelcomeImage } = useGraphQL();

  return (
    <SideBySide>
      <SideBySide.ThreeCols bgColorClass="bg-gray-500">
        <div className="p-6 sm:p-24">
          <Heading textColor="white" underlineColor="olive">
            <Heading.Eyebrow>Don't want to drive?</Heading.Eyebrow>
            <Heading.Main>Get the Courtesy Bus</Heading.Main>
          </Heading>
          <div className="mt-6 prose text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              similique accusantium deserunt necessitatibus dolorum hic natus
              reiciendis tempora fuga excepturi.
            </p>
          </div>
          <h2 className="pb-4 mt-6 text-xl font-semibold prose text-white border-b-2 border-white sm:text-2xl">
            Monday - Thursdays, 6pm - 10:30pm
          </h2>
          <h2 className="pb-4 mt-6 text-xl font-semibold prose text-white border-b-2 border-white sm:text-2xl">
            Fridays & Saturdays, 7pm - 12am
          </h2>
          <h2 className="pb-4 mt-6 text-xl font-semibold prose text-white sm:text-2xl">
            Sunday - Not Operating
          </h2>
        </div>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <div className="lg:py-24 lg:-ml-24">
          <StaticImage
            src="../images/courtesy-bus.jpg"
            alt=""
            className="flex-1"
          />
        </div>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}
function ExcitingEvents() {
  const { landingWelcomeImage } = useGraphQL();

  return (
    <SideBySide>
      <SideBySide.ThreeCols bgColorClass="bg-cream">
        <div className="p-6 sm:p-24">
          <Heading textColor="black" underlineColor="olive">
            <Heading.Eyebrow>Keep up with our</Heading.Eyebrow>
            <Heading.Main>Exciting Events</Heading.Main>
          </Heading>
          <h2 className="mt-6 text-xl prose text-black sm:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
            provident expedita. Earum itaque tempora fugiat.
          </h2>
          <div className="mt-6 prose text-black">
            <p>
              More than the scenic shorelines and the lush rainforests, Halliday
              Point also has a wonderful range of celebrations and amusements.
              These fun-filled activities include various events that would make
              your visit an unforgettable one.
              <br />
              <br />
              The splendid range of attractions and facilities for a vast array
              of merrymaking have made Hallidays Point a very popular holiday
              and daytrip venue for locals and tourists.
              <br />
              <br />
              Hallidays Point has excellent amenities including tennis courts, a
              local bowling club and, of course, the Hallidays Point Tavern.
              Talk to our tavern about your functions.
            </p>
          </div>
          <div className="flex justify-start mt-8">
            <Link
              to="/about"
              className="px-6 py-2 font-serif tracking-wide text-black uppercase bg-olive"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <div className="lg:py-24 lg:-ml-24">
          {' '}
          <GatsbyImage
            alt="welcome"
            image={landingWelcomeImage.childImageSharp.gatsbyImageData}
            className="flex-1"
          />
        </div>
      </SideBySide.TwoCols>
    </SideBySide>
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

export default ContactPage;
