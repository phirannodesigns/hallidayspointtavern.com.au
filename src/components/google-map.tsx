import * as React from 'react';

import { useLazyLoad } from '../hooks/use-lazy-load';
import { SiteSettings, useSiteSettings } from '../hooks/use-site-settings';

function GoogleMap(): React.ReactElement {
  const {
    containerRef,
    srcRef,
    isLoaded,
    handleIsLoaded,
    Spinner,
  } = useLazyLoad();
  const siteSettings: SiteSettings = useSiteSettings();
  return (
    <div ref={containerRef} className="relative flex h-64 bg-teal-transparent">
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
