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
          lead="At the Tavern, we are focused on delivering the best customer
          experience by combining great food, exquisite wines and beer, and
          matched with excellent customer service."
          backgroundColour="transparent-teal"
        >
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
            Once considered unusable grazing land by the Australian Agricultural
            Company, the coastal land of the Manning was handed back to the
            Crown who classified it as part of the Gloucester Gold Fields. The
            English Scottish and Australian Bank Limited purchased 368 acres of
            this ‘unusable’ land at Black Head. The acreage encompassed the site
            where the Hallidays Point Tavern now stands. The land was sold to
            John (Jack) Hoy who used the land as a dairy farm. He built two
            homes, one on the hill near Coromont Drive at Red Head and the
            other, which still stands today, on Black Head Road. Jack Hoy sold
            the land to a retiring Thomas (Tom) Lynch c1960. Tom quickly sold
            off twenty-two acres, where Beachfront Over 50’s Community is
            located, and on the remaining land ran beef cattle. From the mid to
            late 1960s Tom, now fully retired, handed the land to his eldest son
            Brian, and Brian’s wife Carol. They established a piggery and a very
            successful pea farm. When Brian decided to move to Papua New Guinea
            in 1969, Tom put the land up for sale. It was Tom’s youngest son
            Roger who purchased the land. Roger had plans to subdivide the land
            into ten acre lots but his plans were rejected by the Manning
            Council. The Council had requested residential lots be included.
            Roger eventually sold the land which was further divided into
            multiple sized smaller acreages. A twenty-five-acre parcel of this
            division remained dormant for a few years until 1975.
          </p>
          <p>
            Three weeks after arriving in Australia from Italy in 1966, Mr
            Erveno (Elvis) Castelletto, a builder by trade, purchased land in
            Forster and by 1972 moved there permanently. It wasn’t long before
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
            owners or managers. The restaurant was licensed to sell alcohol to
            diners only. Elvis’s plans to sell the motel and restaurant together
            proved difficult, so the decision was made to sell the restaurant
            and strata title the motel.
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
            Around 1993, Ray and May Newell purchased the restaurant from Elvis.
            The restaurant became a bar, leaving a small portion as a dining
            room. One of the girls (name unknown at time of writing), who worked
            in the kitchen, suggested the name ‘The Proud Aussie Tavern’ and
            this was quickly agreed to by Ray. He had the first extensions built
            to expand the bar area in 1996. In that same year hired Bill and
            Anna Wilson to manage The Proud Aussie Tavern. Bill and Anna were
            given permission to run the Tavern, as it was known by locals, as if
            it were their own. Bill applied to TAB New South Wales (NSW) and,
            after much research requested by TAB authorities, a place for the
            locals to have a punt was up and running by the end of 2000. Bill
            and Anna ran the Tavern for six years. In 2002, Ray and May sold the
            Tavern to the partnership of Wayne Judd and Ben Kelsall. Ben had
            family members willing to manage the Tavern, Bill and Anna Wilson’s
            services were no longer required. Because of their advocacy towards
            the community and its facilities, Bill and Anna had endeared
            themselves to the locals. It was a sad day for many when they left.
          </p>
          <p>
            The Proud Aussie Tavern became ‘The Aussie Tavern’ and the new
            partnership quickly derived plans to renovate and expand. After a
            couple of years Ben split his share and sold a quarter to Ian Reece
            and the other quarter to Sam Bennett. Sam became the new manager.
            This partnership worked together for a few years and the continuum
            carried on until Ian and Ben decided it was time to return to their
            respective home towns. Sam moved on and Ben regained the shares
            previously sold to Ian and Sam. In due course sold his freehold
            share to Paul Donoghue. Paul had owned pubs before and saw the
            Tavern as a good opportunity that had good infrastructure. On August
            2, 2010 Paul and his wife Sylvia, in addition to being part owners,
            became the managers of the Tavern. Under this new partnership of
            Wayne Judd and Paul Donoghue the Tavern had a third name change,
            although the initial name put forward did not bode well with Paul.
            The Point had no connection to land, place or community so it became
            the Hallidays Point Tavern. The renovation plans came into fruition
            and the tavern’s bar area and dining room expanded again, internally
            and externally, entering into modernity. As the local area grew in
            popularity for visitors and residents alike, the Tavern’s popularity
            also grew. Paul and Sylvia developed and managed the flourishing
            Tavern for seven years. Making the decision to retire from active
            work, but still being part of the Tavern, Paul, in collaboration
            with Wayne, leased the Tavern to Guy and Kerri-lee Safran in 2017.
          </p>
          <p>
            Hallidays Point Tavern started as The Elga Restaurant that
            incorporated a small dining room no larger than an average-sized
            family room, and a half dozen wooden shelves resting on a mirrored
            background, surrounded by deep-red coloured tiles for a bar. The Bar
            has now easily tripled in size that includes over twelve assorted
            beer taps, just floating beyond a natural wooden bar adorned with
            embossed, lightly covered tiles, highlighted by black shelving
            standing behind and the dining room can seat well over one hundred
            cliental.
          </p>
          <p>
            <strong>By Tracey Wilson</strong>
            <br /> Resources: Bill Wilson, interview by Tracey Wilson,
            recording, Tuncurry, 22 April 2021, in author’s possession. <br />
            Brian Lynch, interview by Tracey Wilson, recording, Black Head, 5
            April 2021, in author’s possession. <br />
            Elvis Castelletto, interview by Tracey Wilson, recording, Taree, 20
            April 2021, in author’s possession.
            <br />
            Maps and Land Registry, Department of Lands Registry NSW,
            https://hlrv.nswlrs.com.au <br />
            Roger Lynch, interview by Tracey Wilson, recording, Forster, 21
            April 2021, in author’s possession. <br />
            The Elga – Now Opened, Advertisement, Manning River Times, 5 March
            1982, p.33
          </p>
        </Copy>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <div className="px-4 py-12 space-y-8 transform lg:-translate-x-24 sm:px-6 lg:px-12 lg:py-24">
          <figure className="flex flex-col items-center lg:block">
            <StaticImage
              src="../images/looking-north.jpg"
              alt=""
              className="flex-1"
            />
            <figcaption className="font-semibold text-center lg:text-left">
              Looking north towards beach
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center lg:block">
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
      <div className="relative aspect-w-4 aspect-h-9 lg:aspect-w-16 lg:aspect-h-10">
        <div className="absolute inset-0 flex">
          <div className="flex-1">
            <div className="grid h-full grid-cols-2 gap-4 lg:grid-flow-col lg:grid-rows-6 lg:grid-cols-3">
              <div className="row-span-2 ">
                <div className="relative h-[80%] lg:h-[90%] bg-white ">
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
              <div className="row-span-2 ">
                <div className="relative h-[80%] lg:h-[90%] bg-white ">
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
              <div className="row-span-2 ">
                <div className="relative h-[80%] lg:h-[90%] bg-white ">
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

              <div className="row-span-2 ">
                <div className="relative h-[80%] lg:h-[90%] bg-white ">
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
              <div className="row-span-2 ">
                <div className="relative h-[80%] lg:h-[90%] bg-white ">
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
              <div className="row-span-2 ">
                <div className="relative h-[80%] lg:h-[90%] bg-white ">
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

              <div className="row-span-2 lg:row-span-3">
                <div className="relative h-[80%] lg:h-[90%] bg-white ">
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
              <div className="row-span-2 lg:row-span-3">
                <div className="relative h-[80%] lg:h-[90%] bg-white ">
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
