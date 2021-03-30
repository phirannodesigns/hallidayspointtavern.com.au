import * as React from 'react';
import { useInView } from 'react-intersection-observer';

import { Spinner } from '../components/spinner';

function LoadingSpinner(): React.ReactElement {
  return (
    <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-teal-transparent">
      <Spinner />
    </div>
  );
}

interface IUseLazyLoad {
  containerRef: (node?: Element | null | undefined) => void;
  srcRef: React.MutableRefObject<null>;
  isLoaded: boolean;
  handleIsLoaded: () => void;
  Spinner: () => JSX.Element;
}

export function useLazyLoad(): IUseLazyLoad {
  // Add a ref to image wrapper so that we can detect when it
  // enters the viewport using IntersectionObserver
  const [containerRef, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  // Create a ref for the product image
  const srcRef = React.useRef(null);

  // Show a spinner while image is loading
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Function to set imageLoaded to true so that we can unmount the spinner
  const handleIsLoaded = () => setIsLoaded(true);

  // When image enters the screen swap out src for the data-src
  React.useEffect(() => {
    if (inView && srcRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line scanjs-rules/assign_to_src
      srcRef.current.src = srcRef.current.dataset.src;
    }
  }, [inView]);

  return {
    containerRef,
    srcRef,
    isLoaded,
    handleIsLoaded,
    Spinner: LoadingSpinner,
  };
}
