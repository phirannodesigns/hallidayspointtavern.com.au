import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import PortableText from 'react-portable-text';

import { Copy } from '../components/copy';
import { Layout } from '../components/layout';
import { Menu } from '../components/menu';
import { OverlappingImageWrapper } from '../components/overlapping-image-wrapper';
import { SEO } from '../components/seo';
import { SideBySide } from '../components/side-by-side';
import { CopyWithImage, useHomePage } from '../hooks/use-home-page';
import logo from '../images/reschs-logo.svg';

function MenuPage(): React.ReactElement {
  const data = useHomePage();
  return (
    <>
      <SEO title="Menu" />
      <Layout>
        <OurMenu data={data.menuSection} />
        <Menu />
      </Layout>
    </>
  );
}

interface OurMenuProps {
  data?: CopyWithImage;
}

function OurMenu({ data }: OurMenuProps): JSX.Element | null {
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
              className="absolute inset-0 bg-black bg-opacity-75 pointer-events-none"
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
            underlineColor: 'olive',
          }}
          lead={data.description}
          cta={
            data.cta?.[0]._type === 'pageCta'
              ? { route: `/${data.cta[0].page}/`, text: data.cta[0].text }
              : undefined
          }
        >
          {data._rawCopy ? (
            <PortableText
              content={data._rawCopy}
              serializers={{}}
              className="!mt-0"
            />
          ) : null}
        </Copy>
      </SideBySide.ThreeCols>
      <SideBySide.TwoCols>
        <OverlappingImageWrapper>
          {/* <figure className="flex flex-col w-full pb-12 mx-auto prose text-center text-white max-w-none">
            <StaticImage
              src="../images/dine-and-discover-nsw.jpg"
              alt=""
              className="max-w-xs mx-auto max-h-48"
              objectFit="contain"
            />
            <figcaption className="mt-5 font-medium">
              Dine &amp; Discover <br />
              voucher accepted here 7 days a week
            </figcaption>
          </figure> */}
          <figure className="flex flex-col w-full pb-12 mx-auto prose text-center text-white max-w-none">
            <img
              src={logo}
              alt=""
              className="max-w-xs mx-auto !mb-0 max-h-48"
            />
            <figcaption className="mt-5 font-medium">
              Preferred venue of the <br />
              <a href="/" className="!text-white">
                Resch's Appreciation society
              </a>
            </figcaption>
          </figure>
        </OverlappingImageWrapper>
      </SideBySide.TwoCols>
    </SideBySide>
  );
}

export default MenuPage;
