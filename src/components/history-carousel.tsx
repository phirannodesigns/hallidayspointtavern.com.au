import './history-carousel.css';

import { GatsbyImage } from 'gatsby-plugin-image';
import Carousel from 'nuka-carousel';
import * as React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

import { Slide, useImageGallery } from '../hooks/use-image-gallery';
import { useMediaQuery } from '../hooks/use-media-query';
import { useTailwindConfig } from '../hooks/use-tailwind-config';

interface CarouselSlideProps {
  isActive: boolean;
  slide: Slide;
}

function CarouselSlide({ slide, isActive }: CarouselSlideProps): JSX.Element {
  return (
    <div>
      <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
        <div className="absolute inset-0 flex">
          <GatsbyImage
            image={slide.asset.gatsbyImageData}
            alt=""
            className="flex-1"
          />
        </div>
      </div>
      {slide.caption ? (
        <p
          className={`w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.caption}
        </p>
      ) : null}
    </div>
  );
}

function HistoryCarousel(): JSX.Element {
  const tailwindConfig = useTailwindConfig();

  const isSmall = useMediaQuery(
    `(max-width: ${tailwindConfig.theme.screens.lg})`
  );

  const slidesToShow = isSmall ? 1 : 2;
  const [index, setIndex] = React.useState(0);
  const slides = useImageGallery();
  return (
    <div id="carousel" className="w-full px-4 py-16 sm:px-0">
      <h2 className="mb-12 text-3xl font-bold tracking-wider text-center uppercase text-light-blue">
        History Gallery
      </h2>
      <Carousel
        autoplay
        afterSlide={(currentIndex) => setIndex(currentIndex)}
        autoplayInterval={5000}
        cellAlign="center"
        dragging
        easing="easeCubicInOut"
        enableKeyboardControls
        slidesToShow={slidesToShow}
        swiping
        transitionMode="scroll3d"
        wrapAround
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            aria-label="Previous slide"
            className="px-4 py-2 leading-none bg-white"
            onClick={previousSlide}
            type="button"
          >
            <FaAngleDoubleLeft className="text-light-blue" />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            aria-label="Next slide"
            className="px-4 py-2 leading-none bg-white"
            onClick={nextSlide}
            type="button"
          >
            <FaAngleDoubleRight className="text-light-blue" />
          </button>
        )}
        renderBottomCenterControls={null}
        className="w-full h-full mx-auto overflow-visible outline-none focus:ring max-w-7xl"
      >
        {slides.map((slide, i) => (
          <CarouselSlide key={slide.id} slide={slide} isActive={index === i} />
        ))}
      </Carousel>
    </div>
  );
}

export { HistoryCarousel };
