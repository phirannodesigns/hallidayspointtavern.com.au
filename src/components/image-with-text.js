import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from 'prop-types';

const ImageWithText = ({
  image,
  heading,
  body,
  cta,
  bgColorClass,
  reversed,
  sanityImage,
}) => {
  
  return (
    <article className={`${bgColorClass || 'bg-white'}`}>
      <div className="w-full px-4 py-20 mx-auto sm:px-6 max-w-screen-2xl">
        <div
          className={`relative flex items-stretch ${
            reversed ? 'justify-start' : 'justify-end'
          } lg:justify-center`}
        >
          {!reversed ? (
            <div className="absolute left-0 flex w-full h-full transform -translate-x-12 sm:w-9/12 md:h-auto md:w-5/12 md:transform-none md:relative">
              <div className="absolute left-0 flex transform -translate-y-24 sm:-translate-y-24 md:flex-1 w-6/5 h-1/2 md:h-full">
                {sanityImage ? (
                  <GatsbyImage alt="asdf" image={image.asset.fluid} className="flex-1" />
                ) : (
                  <GatsbyImage
                  alt="fdsa"
                    image={image.childImageSharp.gatsbyImageData}
                    className="flex-1"
                  />
                )}
              </div>
            </div>
          ) : (
            ''
          )}

          <div className="relative z-20 w-full px-8 pt-10 pb-6 mt-48 sm:mt-0 sm:pt-16 md:px-12 sm:w-10/12 md:w-8/12 lg:w-6/12 bg-brand-lightGray">
            <div className="relative pb-1">
              <div
                className={`absolute bottom-0 ${
                  reversed ? 'left-0' : 'right-0'
                } h-4 lg:right-1/10 w-13/10 bg-brand-creamyBrown`}
              />
              {heading}
            </div>
            <div className="mt-10 prose sm:mt-16">{body}</div>
            {cta}
          </div>

          {reversed ? (
            <div className="absolute right-0 z-10 flex w-full h-full transform translate-x-12 sm:w-9/12 md:h-auto md:w-5/12 md:transform-none md:relative">
              <div className="absolute right-0 flex transform -translate-y-24 h-1/2 sm:-translate-y-24 md:h-full md:flex-1 w-6/5">
                {sanityImage ? (
                  <GatsbyImage alt="qwer" image={image.asset.fluid} className="flex-1" />
                ) : (
                  <GatsbyImage
                  alt="rewq"
                    image={image.childImageSharp.gatsbyImageData}
                    className="flex-1"
                  />
                )}
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </article>
  );
};

ImageWithText.propTypes = {
  image: PropTypes.object.isRequired,
  bgColorClass: PropTypes.string,
  reversed: PropTypes.bool,
  heading: PropTypes.node,
  body: PropTypes.node,
  cta: PropTypes.node,
  sanityImage: PropTypes.bool,
};

export { ImageWithText };
