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

function AboutPage(): React.ReactElement {
  return (
    <>
      <SEO title="About" />
      <Layout hero={<Hero />}>
        <Welcome />
        <OurMenu />
        <ExcitingEvents />
        <ContactSection />
        <GoogleMap />
      </Layout>
    </>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              similique accusantium deserunt necessitatibus dolorum hic natus
              reiciendis tempora fuga excepturi. Culpa nemo architecto facere
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quis distinctio quaerat veritatis esse labore, deserunt enim
              eveniet ad obcaecati hic. Deserunt nostrum magnam veritatis rerum
              non similique reiciendis architecto! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Temporibus, eius non accusantium
              sequi cum nobis neque. Qui distinctio, eum ad, quae debitis veniam
              dolor sit amet cum ipsum a quasi. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloremque dolorum, earum error sunt
              corrupti reprehenderit assumenda nobis enim et est, iste veniam
              aspernatur? Perferendis repudiandae minus voluptatem architecto
              cupiditate? Tenetur!
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
          <Heading>
            <Heading.Eyebrow>Come check out</Heading.Eyebrow>
            <Heading.Main>Our Delicious Menu</Heading.Main>
          </Heading>
          <h2 className="mt-6 text-xl prose text-white sm:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
            provident expedita. Earum itaque tempora fugiat.
          </h2>
          <div className="mt-6 prose text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              similique accusantium deserunt necessitatibus dolorum hic natus
              reiciendis tempora fuga excepturi. Culpa nemo architecto facere
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quis distinctio quaerat veritatis esse labore, deserunt enim
              eveniet ad obcaecati hic. Deserunt nostrum magnam veritatis rerum
              non similique reiciendis architecto! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Temporibus, eius non accusantium
              sequi cum nobis neque. Qui distinctio, eum ad, quae debitis veniam
              dolor sit amet cum ipsum a quasi. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloremque dolorum, earum error sunt
              corrupti reprehenderit assumenda nobis enim et est, iste veniam
              aspernatur? Perferendis repudiandae minus voluptatem architecto
              cupiditate? Tenetur!
            </p>
          </div>
          <div className="flex justify-start mt-8">
            <Link
              to="/about"
              className="px-6 py-2 font-serif tracking-wide text-white uppercase bg-black-transparent"
            >
              See Menu
            </Link>
          </div>
        </div>
      </SideBySide.ThreeCols>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              similique accusantium deserunt necessitatibus dolorum hic natus
              reiciendis tempora fuga excepturi. Culpa nemo architecto facere
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quis distinctio quaerat veritatis esse labore, deserunt enim
              eveniet ad obcaecati hic. Deserunt nostrum magnam veritatis rerum
              non similique reiciendis architecto! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Temporibus, eius non accusantium
              sequi cum nobis neque. Qui distinctio, eum ad, quae debitis veniam
              dolor sit amet cum ipsum a quasi. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloremque dolorum, earum error sunt
              corrupti reprehenderit assumenda nobis enim et est, iste veniam
              aspernatur? Perferendis repudiandae minus voluptatem architecto
              cupiditate? Tenetur!
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

export default AboutPage;
