import * as React from 'react';

const OVERLAP_DIRECTION_MAP = {
  left: 'lg:-ml-36',
  right: 'lg:-mr-12',
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
      className={`px-4 py-12 sm:px-6 lg:px-12 lg:py-24 ${OVERLAP_DIRECTION_MAP[overlapDirection]}`}
    >
      {children}
    </div>
  );
}

export { OverlappingImageWrapper };
