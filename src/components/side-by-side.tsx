import * as React from 'react';

type SideBySideProps = {
  background?: React.ReactNode;
  children: React.ReactNode;
  bgColorClass?: String;
};

function SideBySide({
  background,
  children,
  bgColorClass,
}: SideBySideProps): React.ReactElement {
  return (
    <div
      className={`relative w-full px-4 mx-auto bg-white max-w-screen-2xl sm:px-6 lg:px-8`}
    >
      {background ? background : null}
      <div className="relative grid gap-8 lg:grid-cols-5">{children}</div>
    </div>
  );
}

type TwoColsProps = {
  children: React.ReactNode;
  bgColorClass?: String;
};

function TwoCols({ children, bgColorClass }: TwoColsProps): React.ReactElement {
  return (
    <div
      className={`flex flex-col ${
        bgColorClass ? bgColorClass : ''
      } justify-center lg:col-span-2`}
    >
      {children}
    </div>
  );
}

type ThreeColsProps = {
  children: React.ReactNode;
  bgColorClass?: String;
};

function ThreeCols({
  children,
  bgColorClass,
}: ThreeColsProps): React.ReactElement {
  return (
    <div
      className={`flex flex-col justify-center ${
        bgColorClass ? bgColorClass : ''
      } order-last lg:col-span-3 lg:order-none`}
    >
      {children}
    </div>
  );
}

SideBySide.TwoCols = TwoCols;
SideBySide.ThreeCols = ThreeCols;

export { SideBySide };
