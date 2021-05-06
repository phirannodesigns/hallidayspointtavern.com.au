import * as React from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

type TextColor = 'white' | 'black';

type UnderlineColor = 'black' | 'olive';

interface HeadingContextValue {
  underlineColor: UnderlineColor;
}

const HeadingContext = React.createContext<HeadingContextValue | undefined>(
  undefined
);

function useHeadingContext(): HeadingContextValue {
  const context = React.useContext(HeadingContext);
  if (context === undefined) {
    throw new Error(
      `<Heading.Main> must be used inside of a <Heading>, otherwise it will not function correctly.`
    );
  }
  return context;
}

const TEXT_COLOR_MAP = {
  white: 'text-white',
  black: 'text-black',
};

const UNDERLINE_COLOR_MAP = {
  black: 'bg-black',
  olive: 'bg-olive',
};

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
  return (
    <HeadingContext.Provider value={{ underlineColor }}>
      {React.createElement(
        as,
        {
          className: `${TEXT_COLOR_MAP[textColor]} relative flex-col text-xl inline-flex leading-none sm:text-2xl`,
        },
        children
      )}
    </HeadingContext.Provider>
  );
}

function Eyebrow({ children }): React.ReactElement {
  return (
    <span className="relative pl-12">
      {children}
      <br />
    </span>
  );
}

function Main({ children }): React.ReactElement {
  const { underlineColor } = useHeadingContext();
  return (
    <div className="relative inline-block text-5xl font-black sm:text-5xl">
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        style={{ width: `calc(100% + 6rem)` }}
        className={`absolute top-8 -right-4 bg-black h-4 ${UNDERLINE_COLOR_MAP[underlineColor]}`}
      />
    </div>
  );
}

Heading.Eyebrow = Eyebrow;
Heading.Main = Main;

export { Heading };
export type { HeadingLevel, TextColor, UnderlineColor };
