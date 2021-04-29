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
        <OurHistory />
        <OurHistory2 />
        <Gallery />
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

function OurHistory() {
  return (
    <SideBySide
      background={
        <div className="absolute inset-0 flex">
          <StaticImage
            src="../images/elga-motel-1982.jpg"
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
          <figure>
            <StaticImage
              src="../images/advert-for-elga.png"
              alt=""
              className="flex-1"
            />
            <figcaption className="font-semibold text-center text-white">
              1st Advert for Elga, Manning River Times March 1982
            </figcaption>
          </figure>
        </div>
      </SideBySide.TwoCols>
      <SideBySide.ThreeCols>
        <Copy
          heading={{
            eyebrow: 'A place to play',
            main: 'Our History',
            underlineColor: 'olive',
          }}
          maxWidth="max-w-prose"
        >
          <p>
            Once consider unusable grazing land by the Australian Agricultural
            Company, the coastal land of the Manning was handed back to the
            Crown who classified it as part of the Gloucester Gold Fields.
          </p>
          <p>
            On February 24th, 1910 the English Scottish and Australian Bank
            Limited purchased 368 acres at Black Head for the sum of £399.4.2.
            The acreage encompassed the site where the Hallidays Point Tavern
            now stands. Eventually the land was sold to John (Jack) Hoy who used
            the land as a dairy farm. He built two homes, one on the hill near
            Coromont Drive at Red Head and the other, which still stands today,
            on Black Head Road. Jack Hoy sold the land to a retiring Thomas
            (Tom) Lynch c1960. Tom quickly sold off twenty-two acres, where
            Beachfront Over 50’s Community is located, and on the remaining land
            ran beef cattle. From the mid to late 1960s Tom, now fully retired,
            handed the land to his eldest son Brian, and Brian’s wife Carol.
            They established a piggery and a very successful pea farm. When
            Brian decided to move to Papua New Guinea in 1969, Tom put the land
            up for sale. It was Tom’s youngest son Roger who purchased the land.
            Roger had plans to subdivide the land into ten acre lots but his
            plans were rejected by the Manning Council. The Council had
            requested residential lots be included. Eventually these residential
            lots were allotted and became Red Head, the Coromont Drive and Hope
            Street area. Roger sold the land within a couple of years and the
            remaining land was further divided into multiple sized smaller
            acreages. A twenty-five-acre parcel of this division remained
            dormant for a few years until 1975.
          </p>
        </Copy>
      </SideBySide.ThreeCols>
    </SideBySide>
  );
}

function OurHistory2(): React.ReactElement {
  return (
    <SideBySide>
      <SideBySide.ThreeCols>
        <div className="absolute inset-0 flex">
          <StaticImage src="../images/wallaby.jpg" alt="" className="flex-1" />
        </div>
        <Copy backgroundColour="cream" onDark={false}>
          <p>
            Three weeks after arriving in Australia from Italy in 1966, Mr
            Erveno (Elvis) Castelletto, a builder by trade, purchased land in
            Forster and by 1972 lived there permanently. It wasn’t long before
            Elvis decided that his son Girolamo (Jim) needed more room to run
            around, a place to play. The decision to buy the twenty-five acres
            at Black Head was made the very day Elvis was shown the land, and in
            1977 he became the official owner. He built a garage that was meant
            to house a caravan, but his wife Luciana (Lucy) suggested partitions
            for two bedrooms. It became the family home, welcoming their
            daughter Alida soon after they moved in. The home is now the
            Hallidays Point Senior Citizens’ Centre. Early 1980, the building
            trade had slowed considerably and Elvis needed to find work.
            Remembering a discussion about the lack of accommodation at Black
            Head he decided to build a motel and restaurant to sell. Jim Edmond,
            a truck driver from Forster, told Elvis of some cheap bricks in
            Newcastle and a deal was made to deliver them to Black Head. By the
            end of January 1982, the Elga Motel and Restaurant was built. The
            name Elga is derived from the first initial of the family member’s
            first names, Elvis, Lucy, Girolamo (Jim) and Alida. The restaurant
            was a separate building to the motel and, initially, was single
            storey. Later a second storey was built as a residence for future
            owners or managers. The restaurant was licensed to sell alcohol but
            only to diners. Elvis’s plans to sell the motel and restaurant
            together proved difficult, so the decision was made to sell the
            restaurant and strata title the motel.
          </p>
          <p>
            In c1993 Ray and May Newell purchased the restaurant, along with the
            land the present day Hallidays Point Tavern now stands. The
            restaurant became a bar area, although some food was still sold. One
            of the girls (name unknown at time of writing), who worked in the
            kitchen, suggested the name ‘The Proud Aussie Tavern’ and this was
            quickly agreed to by Ray. He had the first extensions built to
            expand the bar area in 1996. In that same year, hired Bill and Anna
            Wilson to manage The Proud Aussie Tavern. Bill and Anna were given
            permission to run, by this time what was simply known as the Tavern
            by locals, as if it were their own. Bill applied to TAB New South
            Wales (NSW). After much research requested by TAB NSW, the TAB was
            up and running c2000.
          </p>
        </Copy>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <div className="space-y-8 transform lg:-translate-x-24">
          <figure>
            <StaticImage
              src="../images/looking-north.jpg"
              alt=""
              className="flex-1"
            />
            <figcaption className="font-semibold text-center lg:text-left">
              Looking north towards beach
            </figcaption>
          </figure>
          <figure>
            <StaticImage
              src="../images/elvis-and-brother.jpg"
              alt=""
              className="flex-1"
            />
            <figcaption className="font-semibold text-center lg:text-left">
              Elvis &amp; his brother Andrew building 2nd storey of tavern
            </figcaption>
          </figure>
        </div>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}

function Gallery(): React.ReactElement {
  return (
    <div className="w-full px-4 py-12 mx-auto overflow-hidden max-w-screen-2xl bg-teal sm:px-6 lg:px-12 lg:py-24">
      <div className="relative aspect-w-4 aspect-h-6 md:aspect-w-16 md:aspect-h-10">
        <div className="absolute inset-0 flex">
          <div className="flex-1">
            <div className="grid h-full grid-flow-col grid-cols-2 grid-rows-6 gap-4 md:grid-cols-3">
              <div className="row-span-2">
                <div className="relative h-[90%] bg-white ">
                  <div className="absolute inset-0 flex">
                    <StaticImage
                      src="../images/original-bar-c1982.jpg"
                      alt=""
                      className="flex-1"
                    />
                  </div>
                </div>
                <p className="font-semibold text-white">Original Bar c1982</p>
              </div>
              <div className="row-span-2">
                <div className="relative h-[90%] bg-white ">
                  <div className="absolute inset-0 flex">
                    <StaticImage
                      src="../images/looking-north-toward-tavern.jpg"
                      alt=""
                      className="flex-1"
                    />
                  </div>
                </div>
                <p className="font-semibold text-white">
                  Looking north toward tavern c1982
                </p>
              </div>
              <div className="row-span-2">
                <div className="relative h-[90%] bg-white ">
                  <div className="absolute inset-0 flex">
                    <StaticImage
                      src="../images/elga-1982.jpg"
                      alt=""
                      className="flex-1"
                    />
                  </div>
                </div>
                <p className="font-semibold text-white">Elga 1982</p>
              </div>

              <div className="row-span-2">
                <div className="relative h-[90%] bg-white ">
                  <div className="absolute inset-0 flex">
                    <StaticImage
                      src="../images/date-of-elga-foundation.jpg"
                      alt=""
                      className="flex-1"
                    />
                  </div>
                </div>
                <p className="font-semibold text-white">
                  Date of Elga foundation pouring 1-6-82
                </p>
              </div>
              <div className="row-span-2">
                <div className="relative h-[90%] bg-white ">
                  <div className="absolute inset-0 flex">
                    <StaticImage
                      src="../images/lookin-toward-black-head-rd.jpg"
                      alt=""
                      className="flex-1"
                    />
                  </div>
                </div>
                <p className="font-semibold text-white">
                  Looking toward Black Head Rd
                </p>
              </div>
              <div className="row-span-2">
                <div className="relative h-[90%] bg-white ">
                  <div className="absolute inset-0 flex">
                    <StaticImage
                      src="../images/original-house.jpg"
                      alt=""
                      className="flex-1"
                    />
                  </div>
                </div>
                <p className="font-semibold text-white">
                  Original House, now Senior Citizens
                </p>
              </div>

              <div className="row-span-3">
                <div className="relative h-[90%] bg-white ">
                  <div className="absolute inset-0 flex">
                    <StaticImage
                      src="../images/ariel-view-tavern-c1990.jpg"
                      alt=""
                      className="flex-1"
                    />
                  </div>
                </div>
                <p className="font-semibold text-white">
                  Ariel view of tavern c1990
                </p>
              </div>
              <div className="row-span-3">
                <div className="relative h-[90%] bg-white ">
                  <div className="absolute inset-0 flex">
                    <StaticImage
                      src="../images/elga-1982.jpg"
                      alt=""
                      className="flex-1"
                    />
                  </div>
                </div>
                <p className="font-semibold text-white">Elga Motel 1982</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
