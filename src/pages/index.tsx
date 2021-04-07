import * as React from 'react';

import { Link } from 'gatsby';
import { ContactSection } from '../components/contact-section';
import { GoogleMap } from '../components/google-map';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { LogoWhite } from '../icons/logo-white';
import { useGraphQL } from '../hooks/use-graphql';
import { ImageWithText } from '../components/image-with-text';

function IndexPage(): React.ReactElement {
  return (
    <>
      <SEO title="Home" />
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
  const { landingWelcomeImage } = useGraphQL();

  return (
    <ImageWithText
      reversed
      image={landingWelcomeImage}
      heading={
        <>
          <h1 className="relative text-6xl leading-none text-center text-black sm:text-7xl font-script">
            Welcome To
            <span className="block -mt-5 font-serif text-3xl sm:-mt-6 sm:text-5xl">
              Hallidays Point Tavern
            </span>
          </h1>
        </>
      }
      body={
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            similique accusantium deserunt necessitatibus dolorum hic natus
            reiciendis tempora fuga excepturi. Culpa nemo architecto facere
            totam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quis distinctio quaerat veritatis esse labore, deserunt enim eveniet
            ad obcaecati hic. Deserunt nostrum magnam veritatis rerum non
            similique reiciendis architecto!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            eius non accusantium sequi cum nobis neque. Qui distinctio, eum ad,
            quae debitis veniam dolor sit amet cum ipsum a quasi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolorum, earum error sunt corrupti reprehenderit assumenda nobis
            enim et est, iste veniam aspernatur? Perferendis repudiandae minus
            voluptatem architecto cupiditate? Tenetur!
          </p>
        </>
      }
      cta={
        <>
          <div className="flex justify-end mt-8">
            <Link
              to="/about"
              className="px-6 py-2 font-serif font-semibold tracking-wide bg-brand-mossGreen"
            >
              Read more
            </Link>
          </div>
        </>
      }
      bgColorClass="bg-brand-gray"
    />
  );
}

function OurMenu() {
  const { landingWelcomeImage } = useGraphQL();

  return (
    <ImageWithText
      image={landingWelcomeImage}
      heading={
        <>
          <h1 className="relative text-6xl leading-none text-center text-black sm:text-7xl font-script">
            Welcome To
            <span className="block -mt-5 font-serif text-3xl sm:-mt-6 sm:text-5xl">
              Hallidays Point Tavern
            </span>
          </h1>
        </>
      }
      body={
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            similique accusantium deserunt necessitatibus dolorum hic natus
            reiciendis tempora fuga excepturi. Culpa nemo architecto facere
            totam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quis distinctio quaerat veritatis esse labore, deserunt enim eveniet
            ad obcaecati hic. Deserunt nostrum magnam veritatis rerum non
            similique reiciendis architecto!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            eius non accusantium sequi cum nobis neque. Qui distinctio, eum ad,
            quae debitis veniam dolor sit amet cum ipsum a quasi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolorum, earum error sunt corrupti reprehenderit assumenda nobis
            enim et est, iste veniam aspernatur? Perferendis repudiandae minus
            voluptatem architecto cupiditate? Tenetur!
          </p>
        </>
      }
      cta={
        <>
          <div className="flex justify-end mt-8">
            <Link
              to="/about"
              className="px-6 py-2 font-serif font-semibold tracking-wide bg-brand-mossGreen"
            >
              Read more
            </Link>
          </div>
        </>
      }
      bgColorClass="bg-brand-gray"
    />
  );
}

function ExcitingEvents() {
  const { landingWelcomeImage } = useGraphQL();

  console.log(landingWelcomeImage);
  return (
    <ImageWithText
      reversed
      image={landingWelcomeImage}
      heading={
        <>
          <h1 className="relative text-6xl leading-none text-center text-black sm:text-7xl font-script">
            Welcome To
            <span className="block -mt-5 font-serif text-3xl sm:-mt-6 sm:text-5xl">
              Hallidays Point Tavern
            </span>
          </h1>
        </>
      }
      body={
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            similique accusantium deserunt necessitatibus dolorum hic natus
            reiciendis tempora fuga excepturi. Culpa nemo architecto facere
            totam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quis distinctio quaerat veritatis esse labore, deserunt enim eveniet
            ad obcaecati hic. Deserunt nostrum magnam veritatis rerum non
            similique reiciendis architecto!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            eius non accusantium sequi cum nobis neque. Qui distinctio, eum ad,
            quae debitis veniam dolor sit amet cum ipsum a quasi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolorum, earum error sunt corrupti reprehenderit assumenda nobis
            enim et est, iste veniam aspernatur? Perferendis repudiandae minus
            voluptatem architecto cupiditate? Tenetur!
          </p>
        </>
      }
      cta={
        <>
          <div className="flex justify-end mt-8">
            <Link
              to="/about"
              className="px-6 py-2 font-serif font-semibold tracking-wide bg-brand-mossGreen"
            >
              Read more
            </Link>
          </div>
        </>
      }
      bgColorClass="bg-brand-gray"
    />
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

export default IndexPage;
