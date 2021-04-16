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

function EventsPage(): React.ReactElement {
  return (
    <>
      <SEO title="Events" />
      <Layout>
        <EventOfTheWeek />
        <HappyHour />
        <LiveMusic />
        <TriviaAtTheTab />
        <FootyTipping />
        <GoogleMap />
      </Layout>
    </>
  );
}

function FootyTipping() {
  return (
    <SideBySide>
      <SideBySide.ThreeCols bgColorClass="bg-teal-transparent">
        <div className="p-6 sm:p-24">
          <Heading underlineColor="olive">
            <Heading.Eyebrow>It's that time again for</Heading.Eyebrow>
            <Heading.Main>Footy Tipping</Heading.Main>
          </Heading>
          <h2 className="mt-6 text-xl prose text-white uppercase sm:text-2xl">
            join our 2021 footy tipping comp!
          </h2>
          <div className="mt-6 prose text-white">
            <ul className="">
              <li>$50 entry to be paid before Thursday, 11 March - Round 1</li>
              <li>Tips to be in by 1st game of each round (no phone-ins)</li>
              <li>Lowest individual round score for missed tips.</li>
              <li>Perfect Round will receive 1 bonus point</li>
              <li>Prize breakdown - 1st - 50%, 2nd - 30% and 3rd - 20%</li>
            </ul>
            <p>Friday 30th March, 4pm - 8pm</p>
          </div>
          <h2 className="mt-6 text-xl prose text-white sm:text-2xl">
            To enter the 2021 Competition, please enquire at the tavern!
          </h2>
        </div>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <div className="lg:py-24 lg:-ml-24">
          <StaticImage
            src="../images/footy-tipping.jpg"
            alt=""
            className="flex-1"
          />
        </div>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}
function EventOfTheWeek() {
  return (
    <SideBySide>
      <SideBySide.ThreeCols bgColorClass="bg-teal-transparent">
        <div className="p-6 sm:p-24">
          <Heading>
            <Heading.Eyebrow>Come check out our</Heading.Eyebrow>
            <Heading.Main>Event of the week</Heading.Main>
          </Heading>
          <h2 className="mt-6 text-xl prose text-white sm:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
            provident expedita. Earum itaque tempora fugiat.
          </h2>
          <div className="mt-6 prose text-white">
            <p>Friday 30th March, 4pm - 8pm</p>
          </div>
        </div>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <div className="lg:py-24 lg:-ml-24">
          <StaticImage
            src="../images/event-of-the-week.jpg"
            alt=""
            className="flex-1"
          />
        </div>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}

function TriviaAtTheTab() {
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
          <Heading>
            <Heading.Eyebrow>Come and join our</Heading.Eyebrow>
            <Heading.Main>Trivia at the Tav</Heading.Main>
          </Heading>
          <h2 className="mt-6 text-xl prose text-white sm:text-2xl">
            Starting March the 8th
          </h2>
          <div className="mt-6 prose text-white">
            <p>
              Welcome to our first ever Trivia event. We will be hosting Trivia
              every second Monday, starting Monday 8th March from 6:30pm.
            </p>
          </div>
        </div>
      </SideBySide.ThreeCols>
    </SideBySide>
  );
}
function HappyHour() {
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
            <Heading.Eyebrow>Be sure to be here for</Heading.Eyebrow>
            <Heading.Main>Our Happy Hour</Heading.Main>
          </Heading>
          <h2 className="mt-6 text-xl prose text-white sm:text-2xl">
            March Madness
          </h2>
          <div className="mt-6 prose text-white">
            <p>
              Punter's Day Happy Hour
              <br />
              Every Saturday 3:30pm until 5:30pm
              <br />
              Schooners $5* Conditions Apply
            </p>
          </div>
        </div>
      </SideBySide.ThreeCols>
    </SideBySide>
  );
}

function LiveMusic() {
  const { landingWelcomeImage } = useGraphQL();

  return (
    <SideBySide>
      <SideBySide.ThreeCols bgColorClass="bg-cream">
        <div className="p-6 sm:p-24">
          <Heading textColor="black" underlineColor="olive">
            <Heading.Eyebrow>Our Upcoming</Heading.Eyebrow>
            <Heading.Main>Live Music</Heading.Main>
          </Heading>
          <h2 className="mt-6 text-xl font-semibold prose text-black sm:text-2xl">
            Friday Night Live Music - Acoustic Andy
          </h2>
          <div className="pb-4 prose text-black border-b-2 border-black">
            <p>19th Feb 5pm - 7pm</p>
          </div>
          <h2 className="mt-6 text-xl font-semibold prose text-black sm:text-2xl">
            Sunday Sesh - AJ & Annie
          </h2>
          <div className="pb-4 prose text-black border-b-2 border-black">
            <p>21st Feb 3pm - 6pm</p>
          </div>
          <h2 className="mt-6 text-xl font-semibold prose text-black sm:text-2xl">
            Summer Showcase - Taylor & El
          </h2>
          <div className="pb-4 prose text-black border-b-2 border-black">
            <p>28th Feb 4pm - 7pm</p>
          </div>
          <h2 className="mt-6 text-xl font-semibold prose text-black sm:text-2xl">
            Sunday Sesh - AJ & Annie
          </h2>
          <div className="pb-4 prose text-black border-b-2 border-black">
            <p>30th Feb 3pm - 6pm</p>
          </div>
        </div>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <div className="lg:py-24 lg:-ml-24">
          {' '}
          <StaticImage
            src="../images/live-music.jpg"
            alt="live music"
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

export default EventsPage;
