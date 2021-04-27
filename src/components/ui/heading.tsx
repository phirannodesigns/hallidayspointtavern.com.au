import * as React from 'react';

const TEXT_COLOR_MAP = {
  white: 'text-white',
  black: 'text-black',
};

const UNDERLINE_COLOR_MAP = {
  black: 'accent-black-transparent',
  olive: 'accent-olive',
};

type HeadingProps = {
  children: React.ReactNode;
  textColor?: 'white' | 'black';
  underlineColor?: 'black' | 'olive';
};

function Heading({
  children,
  textColor = 'white',
  underlineColor = 'black',
}: HeadingProps): React.ReactElement {
  return (
    <h1
      className={`${TEXT_COLOR_MAP[textColor]} ${UNDERLINE_COLOR_MAP[underlineColor]} relative text-xl leading-none sm:text-2xl font-script heading-accent`}
    >
      {children}
    </h1>
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
