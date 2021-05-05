import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import { Copy } from '../components/copy';
import { GoogleMap } from '../components/google-map';
import { Layout } from '../components/layout';
import { OverlappingImageWrapper } from '../components/overlapping-image-wrapper';
import { SEO } from '../components/seo';
import { SideBySide } from '../components/side-by-side';
import { useLiveMusic } from '../hooks/use-live-music';

function EventsPage(): React.ReactElement {
  return (
    <>
      <SEO title="Events" />
      <Layout>
        <UpcomingSpecialEvents />
        <TriviaAtTheTab />
        <LiveMusic />
        <PaintAndSip />
        <FootyTipping />
        <MeatRaffles />
        <HappyHour />
        <GoogleMap />
      </Layout>
    </>
  );
}

function UpcomingSpecialEvents() {
  return (
    <SideBySide>
      <SideBySide.ThreeCols>
        <div className="absolute inset-0 flex">
          <StaticImage
            src="../images/event-of-the-week-background.jpg"
            alt=""
            className="flex-1"
          />
        </div>
        <Copy
          heading={{
            eyebrow: 'Come check out our',
            main: 'Upcoming Special Events',
          }}
          lead=""
          backgroundColour="transparent-teal"
        >
          <ul>
            <li>Mother’s Day 9th May</li>
            <li>Trivia 17th and 31st May, 14th and 28th June</li>
            <li>Paint ‘n Sip 23rd May</li>
          </ul>
        </Copy>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <OverlappingImageWrapper>
          <StaticImage src="../images/mothers-day.png" alt="" />
        </OverlappingImageWrapper>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}

function TriviaAtTheTab() {
  return (
    <SideBySide
      background={
        <div className="absolute inset-0 flex">
          <StaticImage
            src="../images/trivia-background.jpg"
            alt=""
            className="flex-1"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-opacity-[0.85] pointer-events-none bg-black"
          />
        </div>
      }
    >
      <SideBySide.TwoCols>
        <OverlappingImageWrapper overlapDirection="right">
          <StaticImage src="../images/trivia.jpg" alt="" />
        </OverlappingImageWrapper>
      </SideBySide.TwoCols>
      <SideBySide.ThreeCols>
        <Copy
          heading={{
            eyebrow: 'Come and join our',
            main: 'Trivia at the Tav',
            underlineColor: 'olive',
          }}
          lead="Starting March 8th"
        >
          <p>
            Welcome to our first ever Trivia event. We will be hosting Trivia on
            the following dates: 17th and 31st May, 14th and 28th June
          </p>
        </Copy>
      </SideBySide.ThreeCols>
    </SideBySide>
  );
}

function LiveMusic() {
  const liveMusic = useLiveMusic();
  return (
    <SideBySide>
      <SideBySide.ThreeCols>
        <Copy
          heading={{
            eyebrow: 'Our Upcoming',
            main: 'Live Music',
            underlineColor: 'olive',
          }}
          backgroundColour="cream"
          onDark={false}
        >
          <ul className="divide-y divide-gray-700 reset-list">
            {liveMusic.gigs.map((gig) => (
              <li key={gig._key} className="py-4">
                <h3>{gig.overview}</h3>
                {gig._rawDescription ? (
                  <BlockContent
                    blocks={gig._rawDescription}
                    className="!mt-0"
                  />
                ) : null}
              </li>
            ))}
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

function PaintAndSip() {
  return (
    <SideBySide
      background={
        <div className="absolute inset-0 flex">
          <StaticImage
            src="../images/trivia-background.jpg"
            alt=""
            className="flex-1"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-opacity-[0.85] pointer-events-none bg-teal"
          />
        </div>
      }
    >
      <SideBySide.TwoCols>
        <OverlappingImageWrapper overlapDirection="right">
          <StaticImage src="../images/trivia.jpg" alt="" />
        </OverlappingImageWrapper>
      </SideBySide.TwoCols>
      <SideBySide.ThreeCols>
        <Copy
          heading={{
            eyebrow: 'Paint your town',
            main: 'Paint and Sip',
            underlineColor: 'black',
          }}
          lead="Sunday 23rd May"
        >
          <p>Grab your friends and get ready for a creative afternoon out</p>
          <p>
            Painting begins at 4pm and we'll walk you through step-by-step in
            painting the above art- work. Our classes are for beginners so no
            experience required, plus it's FUN art, not FINE art :)
          </p>
          <p>
            Bookings are essential! go to{' '}
            <a href="https://paintyourtown.com.au/" className="!text-white">
              paintyourtown.com.au
            </a>{' '}
            and click events Price includes your 1/2 hour paint class, canvas,
            and all paint supplies for $50. Food and drinks can be purchased at
            Hallidays Point Tavern during the event to enjoy while painting.
          </p>
        </Copy>
      </SideBySide.ThreeCols>
    </SideBySide>
  );
}

function FootyTipping() {
  return (
    <SideBySide>
      <SideBySide.ThreeCols>
        <div className="absolute inset-0 flex overflow-hidden">
          <StaticImage
            src="../images/footy-tipping-background.jpg"
            alt=""
            className="flex-1"
          />
        </div>
        <Copy
          heading={{
            eyebrow: 'It‘s that time again for',
            main: 'Footy Tipping',
            underlineColor: 'olive',
          }}
          lead="Join Our 2021 Footy Tipping Comp!"
          backgroundColour="transparent-black"
        >
          <ul>
            <li>$50 entry to be paid before Thursday, 11 March - Round 1</li>
            <li>Tips to be in by 1st game of each round (no phone-ins)</li>
            <li>Lowest individual round score for missed tips.</li>
            <li>Perfect Round will receive 1 bonus point</li>
            <li>Prize breakdown - 1st - 50%, 2nd - 30% and 3rd - 20%</li>
          </ul>
          <p>
            <strong className="!text-white">
              To enter the 2021 Competition, please enquire at the tavern!
            </strong>
          </p>
        </Copy>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <OverlappingImageWrapper>
          <StaticImage src="../images/footy-tipping.jpg" alt="" />
        </OverlappingImageWrapper>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}

function MeatRaffles() {
  return (
    <SideBySide
      background={<span aria-hidden className="absolute inset-0 bg-cream" />}
    >
      <SideBySide.TwoCols>
        <OverlappingImageWrapper overlapDirection="right">
          <StaticImage src="../images/meat-raffles.jpg" alt="" />
        </OverlappingImageWrapper>
      </SideBySide.TwoCols>
      <SideBySide.ThreeCols>
        <Copy
          heading={{
            eyebrow: 'Our weekly',
            main: 'Friday Raffle',
            underlineColor: 'olive',
          }}
          onDark={false}
        >
          <p>
            Come down every Friday for your chance to take home a meat tray and
            be in the draw in our weekly membership draw.
          </p>
          <p>This is proudly sponsored by Hallidays Point Social Golf Club.</p>
        </Copy>
      </SideBySide.ThreeCols>
    </SideBySide>
  );
}

function HappyHour() {
  return (
    <SideBySide
      background={
        <div className="absolute inset-0 flex">
          <StaticImage
            src="../images/happy-hour-background.jpg"
            alt=""
            className="flex-1"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-opacity-[0.85] pointer-events-none bg-teal"
          />
        </div>
      }
    >
      <SideBySide.ThreeCols>
        <Copy
          heading={{
            eyebrow: 'Be sure to be here for',
            main: 'Our Happy Hour',
            underlineColor: 'black',
          }}
        >
          <ul>
            <li>Punter's Day Happy Hour</li>
            <li>Every Saturday 3:30pm until 5:30pm</li>
          </ul>
          <p>
            <small>Schooners $5* Conditions Apply</small>
          </p>
        </Copy>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <OverlappingImageWrapper>
          <StaticImage src="../images/happy-hour.jpg" alt="" />
        </OverlappingImageWrapper>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}

export const query = graphql`
  query {
    allSanityLiveMusic {
      nodes {
        heading
        gigs {
          _key
          overview
          _rawDescription
        }
        mainImage {
          asset {
            gatsbyImageData(width: 1920)
          }
        }
      }
    }
  }
`;

export default EventsPage;
