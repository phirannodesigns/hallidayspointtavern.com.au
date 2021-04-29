import * as React from 'react';

const TEXT_COLOR_MAP = {
  white: 'text-white',
  black: 'text-black',
};

const UNDERLINE_COLOR_MAP = {
  black: 'accent-black',
  olive: 'accent-olive',
};

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

type TextColor = 'white' | 'black';

type UnderlineColor = 'black' | 'olive';

interface HeadingProps {
  as?: HeadingLevel;
  children: React.ReactNode;
  textColor?: TextColor;
  underlineColor?: UnderlineColor;
}

function Heading({
  as = 'h2',
  children,
  textColor = 'white',
  underlineColor = 'black',
}: HeadingProps): React.ReactElement {
  return React.createElement(
    as,
    {
      className: `${TEXT_COLOR_MAP[textColor]} ${UNDERLINE_COLOR_MAP[underlineColor]} relative text-xl leading-none sm:text-2xl heading-accent`,
    },
    children
  );
}

function Eyebrow({ children }): React.ReactElement {
  return <span className="ml-12">{children}</span>;
}

function Main({ children }): React.ReactElement {
  return (
    <span className="block text-5xl font-black sm:text-5xl sm:whitespace-nowrap">
      {children}
    </span>
  );
}

Heading.Eyebrow = Eyebrow;
Heading.Main = Main;

export { Heading };
export type { HeadingLevel, TextColor, UnderlineColor };
