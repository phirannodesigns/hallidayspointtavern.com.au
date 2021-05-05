import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import { ContactSection } from '../components/contact-section';
import { Copy } from '../components/copy';
import { GoogleMap } from '../components/google-map';
import { Layout } from '../components/layout';
import { OverlappingImageWrapper } from '../components/overlapping-image-wrapper';
import { SEO } from '../components/seo';
import { SideBySide } from '../components/side-by-side';

function DiscoverPage(): React.ReactElement {
  return (
    <>
      <SEO
        title="Discover"
        description="Hallidays Point is a coastal region located midway between the towns of Taree and Forster. It offers a vast array of opportunities for outdoor adventures. If you’re looking to relax, explore and enjoy great food at Hallidays Point, here are 12 things you should not miss when you visit the coast."
      />
      <Layout>
        <WhatAreYouWaiting />
        <SpectacularPlaces />
        <ExcitingEvents />
        <FunEvents />
        <DelightfulCuisines />
        <ContactSection />
        <GoogleMap />
      </Layout>
    </>
  );
}

function WhatAreYouWaiting() {
  return (
    <SideBySide>
      <SideBySide.ThreeCols>
        <div className="absolute inset-0 flex">
          <StaticImage src="../images/wallaby.jpg" alt="" className="flex-1" />
        </div>
        <Copy
          heading={{
            eyebrow: 'What are you waiting for?',
            main: '12 Things You Should Not Miss When Visiting Hallidays Point',
          }}
          backgroundColour="transparent-teal"
        >
          <p>
            More than the beautiful coastal view of the Pacific Ocean and laid
            back towns scattered around the region, there is more to Hallidays
            Point than you can expect. Hallidays Point features several
            world-renowned beaches and lush rainforests that would fascinate
            you.
          </p>
          <p>
            Hallidays Point’s coasts lie between Taree and Foster where you will
            find some of the most popular beaches, including Red Head, Black
            Head, Diamond Beach and Back Beach.
          </p>
        </Copy>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <OverlappingImageWrapper>
          <StaticImage src="../images/lake.jpg" alt="" />
        </OverlappingImageWrapper>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}

function SpectacularPlaces() {
  return (
    <div className="relative w-full mx-auto overflow-hidden bg-white max-w-screen-2xl">
      <div className="absolute inset-0 flex">
        <StaticImage src="../images/bridge.jpg" alt="" className="flex-1" />
        <span
          aria-hidden
          className="absolute inset-0 bg-black bg-opacity-75 pointer-events-none"
        />
      </div>
      <SideBySide bgColorClass="bg-transparent">
        <SideBySide.TwoCols>
          <OverlappingImageWrapper overlapDirection="right">
            <StaticImage src="../images/platform.jpg" alt="" />
          </OverlappingImageWrapper>
        </SideBySide.TwoCols>
        <SideBySide.ThreeCols>
          <Copy
            heading={{
              eyebrow: 'Come check out our',
              main: 'Spectacular Places',
              underlineColor: 'olive',
            }}
          >
            <p>
              Visiting Hallidays Point is an absolute escape to nature as it
              unravels striking landscapes and its dense littoral rainforest.
              Make sure to check out these fascinating spots when you go to
              Hallidays Point:
            </p>
            <hr />

            <ul className="divide-y divide-white reset-list">
              <li className="py-4">
                <p className="text-xl font-semibold">1. Black Head Beach</p>
                <p>
                  Black Head Beach is one of the places you should not miss when
                  going to Hallidays Point. Recognised under the Keep Australia
                  Beautiful Program, Black Head beach is one of Manning Valley’s
                  finest swimming beaches.
                </p>
                <br />
                <p>
                  You will be amazed by the dazzling ocean pool of Black Head
                  Beach, one of the three pools found on the Mid-north Coast. It
                  offers excellent fishing opportunities and fun picnics under
                  the Norfolk Pine trees lining the route going to the beach.
                </p>
              </li>
            </ul>
          </Copy>
        </SideBySide.ThreeCols>
      </SideBySide>
      <SideBySide lessTopMargin bgColorClass="bg-transparent">
        <SideBySide.ThreeCols>
          <Copy lessSpace>
            <ul className="divide-y divide-white reset-list">
              <li className="py-4">
                <p className="text-xl font-semibold">
                  2. Barrington Tops National Park
                </p>
                <p>
                  The Gondwana Rainforests, a World Heritage site, is one of the
                  landmarks of Barrington Tops National Park. The park is what
                  every bushwalker dreams of, with an excellent track for
                  walking, from short to long walks to difficult hikes. You may
                  also find a lot of areas here for an overnight bush camp.
                </p>
              </li>
              <li className="py-4">
                <p className="text-xl font-semibold">3. The Diamond Beach</p>
                <p>
                  Whether you’d like to go fishing, surfing or even just have a
                  relaxing stroll along the coastline, Diamond Beach is another
                  attraction you shouldn’t miss when you visit Hallidays Point.
                  Popular among locals and tourists alike, this 6 kilometre
                  stretch of spectacular beach is a perfect lifestyle paradise.
                </p>
              </li>
              <li className="py-4">
                <p className="text-xl font-semibold">
                  4. John Ward Rainforest Walk
                </p>
                <p>
                  The John Ward Rainforest Walk is a hidden paradise of rare
                  tropical species you will not find elsewhere. Take a stroll on
                  its short boardwalk through its dense rainforest and you will
                  be amazed at the sight of different vegetation types such as
                  the banksia scrub, the seaside forest and the coastal dunes.
                </p>
                <br />
                <p>
                  Walking through the reserve unravels the wonderland of rare
                  species such as the Hairy Clerondendrum, the Spiny-Headed Mat
                  Rush, the Rusty Fig, Black Apple, Tuckeroo among others. You
                  will also be able to see examples of bush tucker which were
                  once eaten and used as sustenance by the indigenous
                  Australians.
                </p>
              </li>
            </ul>
          </Copy>
        </SideBySide.ThreeCols>
        <SideBySide.TwoCols>
          <OverlappingImageWrapper>
            <StaticImage src="../images/rainforest.jpg" alt="" />
          </OverlappingImageWrapper>
        </SideBySide.TwoCols>
      </SideBySide>
    </div>
  );
}

function ExcitingEvents() {
  return (
    <SideBySide bgColorClass="bg-cream">
      <SideBySide.TwoCols>
        <OverlappingImageWrapper overlapDirection="right">
          <div className="flex flex-col mx-auto space-y-8">
            <StaticImage src="../images/dolphin.jpg" alt="" />
            <StaticImage src="../images/golf.jpg" alt="" />
          </div>
        </OverlappingImageWrapper>
      </SideBySide.TwoCols>
      <SideBySide.ThreeCols>
        <Copy
          heading={{
            eyebrow: 'Be sure to join in on our',
            main: 'Breath-taking outdoor activities',
            underlineColor: 'olive',
          }}
          backgroundColour="cream"
          onDark={false}
          maxWidth="max-w-prose"
        >
          <ul className="divide-y divide-gray-700 reset-list">
            <li className="py-4">
              <p className="text-xl font-semibold">
                5. Dolphin and Whale Watching
              </p>
              <p>
                Your trip to Hallidays Point would not be complete without
                seeing the whales and dolphins from the coastline. Hallidays
                Point provides excellent vantage points for whale-watching,
                whether you’re at the lookouts or foreshores.
              </p>
              <br />
              <p>
                Every year, around 30,000 of these gentle sea giants migrate to
                New South Wales where the water is warmer along the NSW
                coastline water.
              </p>
            </li>
            <li className="py-4">
              <p className="text-xl font-semibold">
                6. Outdoor adventure at the Saltwater National Park
              </p>
              <p>
                Have a relaxing walk around the Saltwater Natural Park which is
                a reserve located east of the town of Taree. There are a lot of
                outdoor activities to enjoy in this area, from bushwalking to
                having a picnic to canoeing, kayaking, swimming and surfing.
              </p>
              <br />
              <p>
                Headland’s walking track also offers a spectacular view of the
                coastline which is an excellent point for whale watching. If
                you’re lucky, you might see the beautiful humpbacks during their
                annual migration which happens around August to November.
              </p>
            </li>
            <li className="py-4">
              <p className="text-xl font-semibold">
                7. Play golf at Tallwoods Village
              </p>
              <p>
                Enjoy a round of golf at Tallwoods, a world-class, magnificent
                18-hole championship course, designed by top-notch golf course
                designer Dr Michael Hurdzan. Tallwoods Village also features 15
                exquisitely furnished bungalows where you and your family or
                friends can stay while enjoying a relaxed and friendly
                atmosphere.
              </p>
            </li>
          </ul>
        </Copy>
      </SideBySide.ThreeCols>
    </SideBySide>
  );
}

function FunEvents() {
  return (
    <SideBySide>
      <SideBySide.ThreeCols>
        <div className="absolute inset-0 flex">
          <StaticImage src="../images/wallaby.jpg" alt="" className="flex-1" />
        </div>
        <Copy
          heading={{
            eyebrow: 'Time to get invovled in',
            main: 'Our Fun Events',
            underlineColor: 'olive',
          }}
          backgroundColour="transparent-black"
        >
          <ul className="divide-y divide-white reset-list">
            <li className="py-4">
              <p className="text-xl font-semibold">
                8.{' '}
                <span className="italic underline">The Black Head Bazaar</span>
              </p>
              <p>
                Don’t forget to shop around the Black Head Bazaar if you’re
                visiting Hallidays Point between September and May. This
                community market is open on the first Sunday of every month with
                a good mix of shops offering a wide array of products from arts
                and crafts to pastries and home-cooked jams and preserves. You
                will definitely find something to shop here, whether it’s a
                souvenir or to taste the distinct delicacies of Hallidays Point.
              </p>
            </li>
            <li className="py-4">
              <p className="text-xl font-semibold">
                9. <span className="italic underline">Lakeside Festival</span>
              </p>
              <p>
                The Lakeside Festival is a boutique festival of live music, food
                and wine overlooking the fascinating blue water of Wallis Lake.
                You can chill out and enjoy watching the live music
                entertainment on the Tuncurry foreshore.
              </p>
              <br />
              <p>
                Everyone is welcome to take part in this annual festival and you
                can bring along your kids as it is safe for all ages. It’s a
                wonderful experience you should not miss. Tag your family and
                along and enjoy the performance of great artists.
              </p>
            </li>
            <li className="py-4">
              <p className="text-xl font-semibold ">
                10.{' '}
                <span className="italic underline">
                  Wingham Akoostik Music Festival
                </span>
              </p>
              <p>
                If you happen to visit Hallidays Point around October, make sure
                to include the Wingham Akoostik Music Festival in your agenda.
                It’s a great family event organised by Manning Valley
                Neighbourhood Services which features live entertainment by
                local and visiting artists.
              </p>
              <br />
              <p>
                Hallidays Point is a perfect place to enjoy nature and
                experience the best of both worlds. A wonderful trip to this
                beautiful coastal region will not be complete without indulging
                in delicious dishes offered by Hallidays Point Tavern.
              </p>
              <br />
              <p>
                Hallidays Point Tavern presents an excellent menu of tasty
                cuisines whether you’re staying for lunch or dinner. Enjoy your
                tour at the Hallidays Point!
              </p>
            </li>
          </ul>
        </Copy>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <div className="px-4 pt-12 sm:px-6 lg:px-12 lg:py-24 ">
          <div className="relative aspect-w-4 aspect-h-3 lg:aspect-h-4 lg:-ml-36">
            <div className="inset-0 flex lg:absolute">
              <StaticImage src="../images/events.jpg" alt="" />
            </div>
          </div>
          <div className="relative mt-8 aspect-w-4 aspect-h-3 lg:aspect-h-4 lg:-ml-36">
            <div className="inset-0 flex lg:absolute">
              <StaticImage src="../images/live-music.jpg" alt="" />
            </div>
          </div>
        </div>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}

function DelightfulCuisines() {
  return (
    <div className="relative w-full mx-auto max-w-screen-2xl">
      <div className="absolute inset-0 flex overflow-hidden">
        <StaticImage src="../images/pizza-bg.jpg" alt="" className="flex-1" />
      </div>
      <div className="relative px-4 py-12 bg-black bg-opacity-50 lg:py-24 sm:px-6 lg:px-12">
        <div className="text-center">
          <p className="text-3xl text-white">You've got to try our</p>
          <h2 className="block text-5xl font-black text-white sm:text-5xl">
            Delightful Hallidays Point Tavern Cuisines
          </h2>
        </div>
        <ul className="grid max-w-screen-lg gap-16 mx-auto mt-6 lg:grid-cols-2">
          <li className="text-left text-white ">
            <div className="relative aspect-w-4 aspect-h-3 lg:aspect-h-4">
              <div className="flex">
                <StaticImage
                  src="../images/grilled-barramundi-fillet.jpg"
                  alt=""
                  className="flex-1"
                />
              </div>
            </div>
            <p className="mt-4 text-xl font-semibold">11. Lamb Backstrap</p>
            <p>
              Lamb back strap served (med rare) on grilled halloumi, spinach
              pine nuts sun dried tomato with balsamic glaze and rosemary oil.
            </p>
          </li>
          <li className="text-left text-white ">
            <div className="relative aspect-w-4 aspect-h-3 lg:aspect-h-4">
              <div className="flex">
                <StaticImage
                  src="../images/surf-n-turf.jpg"
                  alt=""
                  className="flex-1"
                />
              </div>
            </div>
            <p className="mt-4 text-xl font-semibold">
              12. Fresh Tasmania Salmon Fillet
            </p>
            <p>
              Fresh Tasmania salmon fillet served with creamy mash and
              broccolini with hollandaise sauce.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DiscoverPage;
