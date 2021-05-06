import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import { Copy } from '../components/copy';
import { GoogleMap } from '../components/google-map';
import { Layout } from '../components/layout';
import { OverlappingImageWrapper } from '../components/overlapping-image-wrapper';
import { SEO } from '../components/seo';
import { SideBySide } from '../components/side-by-side';
import { CopyWithImage, EventsSection, useEvents } from '../hooks/use-events';

function EventsPage(): React.ReactElement {
  const events = useEvents();
  return (
    <>
      <SEO title="Events" />
      <Layout>
        <UpcomingEvents data={events.upcomingEvents} />
        <LiveMusic data={events.liveMusic} />
        <SpecialEvent data={events.specialEvent} />
        <SportsEvent data={events.sportsEvent} />
        <MeatRaffles data={events.raffleSection} />
        <HappyHour data={events.happyHour} />
        <GoogleMap />
      </Layout>
    </>
  );
}

interface UpcomingEventsProps {
  data?: CopyWithImage;
}

function UpcomingEvents({ data }: UpcomingEventsProps) {
  if (!data || data.isHidden) {
    return null;
  }
  return (
    <SideBySide>
      <SideBySide.ThreeCols>
        {data?.backgroundImage ? (
          <div className="absolute inset-0 flex">
            <GatsbyImage
              image={data.backgroundImage.asset.gatsbyImageData}
              alt=""
              className="flex-1"
            />
          </div>
        ) : null}
        <Copy
          heading={{
            eyebrow: data.heading1,
            main: data.heading2,
          }}
          backgroundColour="transparent-teal"
        >
          <BlockContent
            renderContainerOnSingleChild
            blocks={data._rawCopy}
            className="!mt-0"
          />
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

interface LiveMusicProps {
  data?: EventsSection;
}
function LiveMusic({ data }: LiveMusicProps) {
  if (!data || data.isHidden) {
    return null;
  }
  return (
    <SideBySide>
      <SideBySide.ThreeCols>
        <Copy
          heading={{
            eyebrow: data.heading1,
            main: data.heading2,
            underlineColor: 'olive',
          }}
          backgroundColour="cream"
          onDark={false}
        >
          <ul className="divide-y divide-gray-700 reset-list">
            {data.events.map((event) => (
              <li key={event.id} className="py-4">
                <h3>{event.overview}</h3>
                {event._rawDescription ? (
                  <BlockContent
                    renderContainerOnSingleChild
                    blocks={event._rawDescription}
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

interface SpecialEventProps {
  data?: CopyWithImage;
}

function SpecialEvent({ data }: SpecialEventProps) {
  if (!data || data.isHidden) {
    return null;
  }
  return (
    <SideBySide
      background={
        data.backgroundImage ? (
          <div className="absolute inset-0 flex">
            <GatsbyImage
              image={data.backgroundImage.asset.gatsbyImageData}
              alt=""
              className="flex-1"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-opacity-[0.85] pointer-events-none bg-teal"
            />
          </div>
        ) : undefined
      }
    >
      <SideBySide.TwoCols>
        <OverlappingImageWrapper overlapDirection="right">
          <StaticImage src="../images/paint-and-sip.jpg" alt="" />
        </OverlappingImageWrapper>
      </SideBySide.TwoCols>
      <SideBySide.ThreeCols>
        <Copy
          heading={{
            eyebrow: data.heading1,
            main: data.heading2,
            underlineColor: 'black',
          }}
          lead={data.description}
        >
          <BlockContent
            renderContainerOnSingleChild
            blocks={data._rawCopy}
            className="!mt-0"
          />
        </Copy>
      </SideBySide.ThreeCols>
    </SideBySide>
  );
}

interface SportsEventProps {
  data?: CopyWithImage;
}

function SportsEvent({ data }: SportsEventProps) {
  if (!data || data.isHidden) {
    return null;
  }
  return (
    <SideBySide>
      <SideBySide.ThreeCols>
        {data.backgroundImage ? (
          <div className="absolute inset-0 flex overflow-hidden">
            <GatsbyImage
              image={data.backgroundImage.asset.gatsbyImageData}
              alt=""
              className="flex-1"
            />
          </div>
        ) : null}
        <Copy
          heading={{
            eyebrow: data.heading1,
            main: data.heading2,
            underlineColor: 'olive',
          }}
          lead={data.description}
          backgroundColour="transparent-black"
        >
          <BlockContent
            renderContainerOnSingleChild
            blocks={data._rawCopy}
            className="!mt-0"
          />
        </Copy>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <OverlappingImageWrapper>
          <StaticImage src="../images/state-of-origin.jpg" alt="" />
        </OverlappingImageWrapper>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}

interface MeatRafflesProps {
  data?: CopyWithImage;
}

function MeatRaffles({ data }: MeatRafflesProps) {
  if (!data || data.isHidden) {
    return null;
  }
  return (
    <SideBySide
      background={<span aria-hidden className="absolute inset-0 bg-cream" />}
    >
      <SideBySide.TwoCols>
        <OverlappingImageWrapper overlapDirection="right">
          <GatsbyImage image={data.mainImage.asset.gatsbyImageData} alt="" />
        </OverlappingImageWrapper>
      </SideBySide.TwoCols>
      <SideBySide.ThreeCols>
        <Copy
          heading={{
            eyebrow: data.heading1,
            main: data.heading2,
            underlineColor: 'olive',
          }}
          onDark={false}
        >
          <BlockContent
            renderContainerOnSingleChild
            blocks={data._rawCopy}
            className="!mt-0"
          />
        </Copy>
      </SideBySide.ThreeCols>
    </SideBySide>
  );
}

interface HappyHourProps {
  data?: CopyWithImage;
}

function HappyHour({ data }: HappyHourProps) {
  if (!data || data.isHidden) {
    return null;
  }
  return (
    <SideBySide
      background={
        data.backgroundImage ? (
          <div className="absolute inset-0 flex">
            <GatsbyImage
              image={data.backgroundImage.asset.gatsbyImageData}
              alt=""
              className="flex-1"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-opacity-[0.85] pointer-events-none bg-teal"
            />
          </div>
        ) : null
      }
    >
      <SideBySide.ThreeCols>
        <Copy
          heading={{
            eyebrow: data.heading1,
            main: data.heading2,
            underlineColor: 'black',
          }}
        >
          <BlockContent
            renderContainerOnSingleChild
            blocks={data._rawCopy}
            className="!mt-0"
          />
        </Copy>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <OverlappingImageWrapper>
          <GatsbyImage image={data.mainImage.asset.gatsbyImageData} alt="" />
        </OverlappingImageWrapper>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}

export default EventsPage;
