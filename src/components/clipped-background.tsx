import * as React from 'react';

function ClippedBackground(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): React.ReactElement {
  return (
    <svg
      clipRule="evenodd"
      fillRule="evenodd"
      preserveAspectRatio="none"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      viewBox="0 0 1080 544"
      {...props}
    >
      <path
        fill="#232e36"
        fillOpacity={0.76}
        d="M1080 0H0v543.006h1080V0zM452 117.003H136v309h316v-309z"
      />
    </svg>
  );
}

export { ClippedBackground };
