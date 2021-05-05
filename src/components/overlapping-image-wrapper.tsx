import * as React from 'react';

const OVERLAP_DIRECTION_MAP = {
  left: 'lg:-ml-36 xl:-ml-48',
  right: 'lg:-mr-12 xl:-mr-24',
};

interface OverlappingImageWrapperProps {
  children: React.ReactNode;
  overlapDirection?: 'left' | 'right';
}

function OverlappingImageWrapper({
  children,
  overlapDirection = 'left',
}: OverlappingImageWrapperProps): React.ReactElement {
  return (
    <div
      className={`relative z-10 max-w-lg px-4 py-12 mx-auto sm:px-6 lg:px-12 lg:py-24 lg:max-w-none ${OVERLAP_DIRECTION_MAP[overlapDirection]}`}
    >
      {children}
    </div>
  );
}

export { OverlappingImageWrapper };
