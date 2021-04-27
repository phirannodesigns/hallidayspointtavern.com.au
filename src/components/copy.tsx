import { Link } from 'gatsby';
import * as React from 'react';

import { Heading, UnderlineColor } from './ui/heading';

const UNDERLINE_COLOR_MAP = {
  black: 'bg-black',
  olive: 'bg-olive',
};

interface CopyProps {
  heading: {
    eyebrow: string;
    main: string;
    underlineColor?: UnderlineColor;
  };
  lead?: string;
  children: React.ReactNode;
  cta?: {
    route: string;
    text: string;
  };
  backgroundColour?:
    | ''
    | 'bg-teal-transparent'
    | 'bg-cream'
    | 'bg-black-transparent';
  onDark?: boolean;
}

function Copy({
  heading,
  lead,
  children,
  cta,
  backgroundColour = '',
  onDark = true,
}: CopyProps): React.ReactElement {
  return (
    <div
      className={`relative flex-1 px-4 py-12 sm:px-6 lg:px-12 lg:py-24 ${backgroundColour}`}
    >
      <div className="mx-auto max-w-prose">
        <div className="max-w-lg">
          <Heading
            textColor={onDark ? 'white' : 'black'}
            underlineColor={heading.underlineColor}
          >
            <Heading.Eyebrow>{heading.eyebrow}</Heading.Eyebrow>
            <Heading.Main>{heading.main}</Heading.Main>
          </Heading>
          <div className={`mt-6 prose ${onDark ? 'text-white' : ''}`}>
            {lead ? (
              <p
                className={`font-semibold lead ${onDark ? '!text-white' : ''}`}
              >
                {lead}
              </p>
            ) : null}
            {children}
          </div>
          {cta ? (
            <div className="flex justify-start mt-8">
              <Link
                to={cta.route}
                className={`px-6 py-2 font-medium tracking-wider uppercase ${
                  onDark ? 'text-white' : ''
                } ${UNDERLINE_COLOR_MAP[heading.underlineColor || 'black']}`}
              >
                {cta.text}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export { Copy };
