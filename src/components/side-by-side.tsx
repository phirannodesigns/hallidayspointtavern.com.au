import * as React from 'react';

type SideBySideProps = {
  children: React.ReactNode;
};

function SideBySide({ children }: SideBySideProps): React.ReactElement {
  return (
    <div className="relative w-full px-4 mx-auto bg-teal-transparent max-w-screen-2xl sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-5">{children}</div>
    </div>
  );
}

type TwoColsProps = {
  children: React.ReactNode;
};

function TwoCols({ children }: TwoColsProps): React.ReactElement {
  return (
    <div className="flex flex-col justify-center lg:col-span-2">{children}</div>
  );
}

type ThreeColsProps = {
  children: React.ReactNode;
};

function ThreeCols({ children }: ThreeColsProps): React.ReactElement {
  return (
    <div className="flex flex-col justify-center order-last lg:col-span-3 lg:order-none">
      {children}
    </div>
  );
}

SideBySide.TwoCols = TwoCols;
SideBySide.ThreeCols = ThreeCols;

export { SideBySide };
