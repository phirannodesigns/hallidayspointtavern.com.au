import * as React from 'react';

interface HeroProps {
  backgroundImage: React.ReactNode;
  children: React.ReactNode;
}

function Hero({ backgroundImage, children }: HeroProps): React.ReactElement {
  return (
    <div className="relative max-h-[36rem]">
      <div className="sm:aspect-w-16 sm:aspect-h-9">
        <div className="absolute inset-0 flex max-h-[36rem]">
          {backgroundImage}
        </div>
        <div className="min-h-[16rem] relative flex items-center justify-center flex-1 px-4 bg-opacity-25 max-h-[36rem] sm:px-6 py-12 lg:px-12 bg-teal">
          {children}
        </div>
      </div>
    </div>
  );
}

export { Hero };
