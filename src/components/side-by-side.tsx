import * as React from 'react';

interface SideBySideProps {
  background?: React.ReactNode;
  children: React.ReactNode;
  bgColorClass?: string;
}

function SideBySide({
  background = null,
  children,
  bgColorClass = 'bg-white',
}: SideBySideProps): React.ReactElement {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`relative w-full mx-auto overflow-hidden max-w-screen-2xl ${bgColorClass}`}
      >
        {background}
        <div className="relative grid gap-8 lg:grid-cols-5">{children}</div>
      </div>
    </div>
  );
}

interface TwoColsProps {
  children: React.ReactNode;
  bgColorClass?: string;
  wrapFirst?: boolean;
}

function TwoCols({
  children,
  bgColorClass = '',
  wrapFirst = false,
}: TwoColsProps): React.ReactElement {
  return (
    <div
      className={`relative flex flex-col justify-center lg:col-span-2 ${
        wrapFirst ? '' : 'order-last lg:order-none'
      } ${bgColorClass}`}
    >
      {children}
    </div>
  );
}

interface ThreeColsProps {
  children: React.ReactNode;
  bgColorClass?: string;
}

function ThreeCols({
  children,
  bgColorClass = '',
}: ThreeColsProps): React.ReactElement {
  return (
    <div
      className={`relative flex flex-col justify-center lg:col-span-3 ${bgColorClass}`}
    >
      {children}
    </div>
  );
}

SideBySide.TwoCols = TwoCols;
SideBySide.ThreeCols = ThreeCols;

export { SideBySide };
