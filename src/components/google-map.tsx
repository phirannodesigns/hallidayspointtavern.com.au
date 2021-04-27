import * as React from 'react';

import { useLazyLoad } from '../hooks/use-lazy-load';
import { useSiteSettings } from '../hooks/use-site-settings';

function GoogleMap(): React.ReactElement {
  const {
    containerRef,
    srcRef,
    isLoaded,
    handleIsLoaded,
    Spinner,
  } = useLazyLoad();
  const siteSettings = useSiteSettings();
  return (
    <div
      ref={containerRef}
      className="relative flex w-full h-64 mx-auto max-w-screen-2xl bg-blue-lightest"
    >
      <iframe
        ref={srcRef}
        data-src={siteSettings.address.googleMaps.embed}
        onLoad={handleIsLoaded}
        allowFullScreen
        aria-hidden
        title={`${siteSettings.title} Google Maps location`}
        className="flex-1"
      />
      {isLoaded ? null : <Spinner />}
    </div>
  );
}

export { GoogleMap };
