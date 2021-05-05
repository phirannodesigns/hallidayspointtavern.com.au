import './HistoryCarousel.css';

import { StaticImage } from 'gatsby-plugin-image';
import Carousel from 'nuka-carousel';
import React, { Fragment, useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

import { useMediaQuery } from '../hooks/use-media-query';
import { useTailwindConfig } from '../hooks/use-tailwind-config';

const historyArray = [
  {
    img: '../images/looking-north.jpg',
    // Loading src as a result of a function call (map) doesn't work with StaticImage,
    // so they are hardcoded below instead...
    description: '1.1st Advert for Elga, Manning River Times March 1982',
    index: 0,
  },
  {
    img: '../images/looking-north.jpg',
    description: '2.368 Acres',
    index: 1,
  },
  {
    img: '../images/looking-north.jpg',
    description: '3. Ariel view of tavern c1990',
    index: 2,
  },
  {
    img: '../images/looking-north.jpg',
    description: '4. Date of Elga foundation pouring - 1-6-82',
    index: 3,
  },
  {
    img: '../images/looking-north.jpg',
    description: '5 .Elga 1982',
    index: 4,
  },
  {
    img: '../images/looking-north.jpg',
    description: '6. Elga Motel 1982',
    index: 5,
  },
  {
    img: '../images/looking-north.jpg',
    description: '7. looking north toward tavern c1982',
    index: 6,
  },
  {
    img: '../images/looking-north.jpg',
    description: '8. Original Bar c1982',
    index: 7,
  },
  {
    img: '../images/looking-north.jpg',
    description: '9. Building 2nd storey of tavern',
    index: 8,
  },
  {
    img: '../images/looking-north.jpg',
    description: '10.Tavern c1985',
    index: 9,
  },
  {
    img: '../images/looking-north.jpg',
    description: '11.Original House, now Senior Citizens',
    index: 10,
  },
  {
    img: '../images/looking-north.jpg',
    description:
      '12. looking toward original house from approx spot where tavern now stands',
    index: 11,
  },
  {
    img: '../images/looking-north.jpg',
    description: '13.entry to motel restaurant',
    index: 12,
  },
  {
    img: '../images/looking-north.jpg',
    description:
      '14.Looking toward Black Head Rd, tavern bricks top left, dirt road goes through the tavern car park',
    index: 13,
  },
  {
    img: '../images/looking-north.jpg',
    description: '15.Back of Tavern, old kitchen door',
    index: 14,
  },
  {
    img: '../images/looking-north.jpg',
    description: '16. in front of restaurant 1985',
    index: 15,
  },
  {
    img: '../images/looking-north.jpg',
    description: '17.Elvis & his brother Andrew building 2nd storey of tavern',
    index: 16,
  },
  {
    img: '../images/looking-north.jpg',
    description: '18.Elvis & Lucy in the restaurant bar',
    index: 17,
  },
  {
    img: '../images/looking-north.jpg',
    description: '19.Elvis & Lucy & relative in front of motel 1995',
    index: 18,
  },
  {
    img: '../images/looking-north.jpg',
    description: '20.Looking north towards beach',
    index: 19,
  },
  {
    img: '../images/looking-north.jpg',
    description: '21.Lucy in front of wallpaper mural in restaurant',
    index: 20,
  },
  {
    img: '../images/looking-north.jpg',
    description:
      '22. Aussie tavern social golf club and Hallidays point social gold club',
    index: 21,
  },
];

const HistoryCarousel = ({ bgGrey }) => {
  const tailwindConfig = useTailwindConfig();

  const isSmall = useMediaQuery(
    `(max-width: ${tailwindConfig.theme.screens.lg as string})`
  );

  const slidesToShow = isSmall ? 1 : 2;
  const [index, setIndex] = useState(0);

  return (
    <div
      id="carousel"
      className={`w-full px-4 py-16 ${bgGrey ? 'bg-gray-200' : ''} sm:px-0`}
    >
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
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/1.1st Advert for Elga, Manning River Times March 1982.jpg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[0].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[0].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/2.368 Acres.jpeg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[1].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[1].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/3. Ariel view of tavern c1990.jpg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[2].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[2].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/4. Date of Elga foundation pouring - 1-6-82.jpg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[3].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[3].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/5 .Elga 1982.jpg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[4].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[4].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/6. Elga Motel 1982.jpg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[5].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[5].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/7. looking north toward tavern c1982.jpg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[6].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[6].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/8. Original Bar c1982.jpg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[7].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[7].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/9. Building 2nd storey of tavern.jpg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[8].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[8].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/10.Tavern c1985.jpg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[9].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[9].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/11.Original House, now Senior Citizens.jpg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[10].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[10].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/12. looking toward original house from approx spot where tavern now stands.jpg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[11].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[11].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/13.entry to motel restaurant.jpeg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[12].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[12].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/14.Looking toward Black Head Rd, tavern bricks top left, dirt road goes through the tavern car park.jpg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[13].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[13].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/15.Back of Tavern, old kitchen door.jpg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[14].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[14].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/16. in front of restaurant 1985.jpeg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[15].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[15].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/17.Elvis & his brother Andrew building 2nd storey of tavern.jpg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[16].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[16].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/18.Elvis & Lucy in the restaurant bar.jpeg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[17].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[17].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/19.Elvis & Lucy & relative in front of motel 1995.jpeg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[18].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[18].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/20.Looking north towards beach.jpg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[19].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[19].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/21.Lucy in front of wallpaper mural in restaurant.jpeg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[20].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[20].description}
          </p>
        </>
        <>
          <div className="relative h-0 aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16">
            <div className="absolute inset-0 flex">
              <StaticImage
                src="../images/22.aussie tavern social golf club_ and Hallidays point social gold club_.jpg"
                alt=""
                className="flex-1"
              />
            </div>
          </div>
          <p
            className={`${
              historyArray[21].index === index ? '' : 'text-transparent'
            } w-full max-w-md pb-12 mx-auto mt-8 tracking-wider text-center transition duration-300 ease-in-out md:max-w-xl`}
          >
            {historyArray[21].description}
          </p>
        </>
      </Carousel>
    </div>
  );
};

export default HistoryCarousel;
