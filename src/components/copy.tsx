import { Link } from 'gatsby';
import * as React from 'react';

import { Heading, UnderlineColor } from './ui/heading';

const UNDERLINE_COLOR_MAP = {
  black: 'bg-black',
  olive: 'bg-olive',
};

const BACKGROUND_COLOR_MAP = {
  '': '',
  'transparent-olive': 'bg-olive bg-opacity-75',
  'transparent-teal': 'bg-teal bg-opacity-[0.85]',
  cream: 'bg-cream',
  'transparent-black': 'bg-black bg-opacity-[0.95]',
};

interface CopyProps {
  heading?: {
    eyebrow?: string;
    main: string;
    underlineColor?: UnderlineColor;
  };
  lead?: string;
  children?: React.ReactNode;
  cta?: {
    route: string;
    text: string;
  };
  backgroundColour?:
    | ''
    | 'transparent-olive'
    | 'transparent-teal'
    | 'cream'
    | 'transparent-black';
  onDark?: boolean;
  maxWidth?: 'max-w-lg' | 'max-w-prose';
}

function Copy({
  heading,
  lead,
  children,
  cta,
  backgroundColour = '',
  onDark = true,
  maxWidth = 'max-w-lg',
}: CopyProps): React.ReactElement {
  return (
    <div
      className={`relative flex flex-col items-start justify-center flex-1 px-4 py-12 sm:px-6 lg:px-12 lg:py-24 ${BACKGROUND_COLOR_MAP[backgroundColour]}`}
    >
      <div className={`w-full ${maxWidth}`}>
        {heading ? (
          <Heading
            textColor={onDark ? 'white' : 'black'}
            underlineColor={heading.underlineColor}
          >
            {heading.eyebrow ? (
              <Heading.Eyebrow>{heading.eyebrow}</Heading.Eyebrow>
            ) : null}
            <Heading.Main>{heading.main}</Heading.Main>
          </Heading>
        ) : null}
        <div className={`mt-6 prose ${onDark ? 'text-white' : ''}`}>
          {lead ? (
            <p className={`font-semibold lead ${onDark ? '!text-white' : ''}`}>
              {lead}
            </p>
          ) : null}
          {children || null}
        </div>
        {cta ? (
          <div className="flex justify-start mt-8">
            <Link
              to={cta.route}
              className={`px-6 py-2 font-medium tracking-wider uppercase ${
                onDark ? 'text-white' : ''
              } ${UNDERLINE_COLOR_MAP[heading?.underlineColor || 'black']}`}
            >
              {cta.text}
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export { Copy };
