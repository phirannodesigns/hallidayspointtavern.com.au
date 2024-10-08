import * as React from 'react';

import { classNames } from '../lib/classnames';

interface SideBySideProps {
  id?: string;
  background?: React.ReactNode;
  children: React.ReactNode;
  bgColorClass?: string;
  lessTopMargin?: boolean;
}

function SideBySide({
  id,
  background = null,
  children,
  lessTopMargin = false,
  bgColorClass = 'bg-white',
}: SideBySideProps): React.ReactElement {
  return (
    <div id={id} className="relative scroll-margin-top-24">
      <div
        className={`${
          lessTopMargin ? '-mt-24' : ''
        } relative w-full mx-auto max-w-screen-2xl ${bgColorClass}`}
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
      className={classNames(
        'relative flex flex-col justify-center lg:col-span-2',
        bgColorClass,
        !wrapFirst && 'order-last lg:order-none'
      )}
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
