import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface Slide {
  id: string;
  asset: {
    gatsbyImageData: IGatsbyImageData;
  };
  caption: string;
}

type Slides = Slide[];

interface ImageGalleryQueryResponse {
  sanityImageGallery: {
    slides: Slides;
  };
}

function useImageGallery(): Slides {
  const { sanityImageGallery } = useStaticQuery<ImageGalleryQueryResponse>(
    graphql`
      query ImageGalleryQuery {
        sanityImageGallery(_id: { eq: "imageGallery" }) {
          slides {
            id: _key
            asset {
              gatsbyImageData(width: 640)
            }
            caption
          }
        }
      }
    `
  );
  return sanityImageGallery.slides;
}

export { useImageGallery };
export type { Slide, Slides };
