// First, we must import the schema creator
// Then import schema types from any plugins that might expose them

// eslint-disable-next-line import/no-unresolved
import schemaTypes from 'all:part:@sanity/base/schema-type';
// eslint-disable-next-line import/no-unresolved
import createSchema from 'part:@sanity/base/schema-creator';

// We import object and document schemas
import address from './address';
import blockContent from './block-content';
import gig from './gig';
import googleMaps from './google-maps';
import homeEvents from './home-events';
import imageGallery from './image-gallery';
import liveMusic from './live-music';
import menuHeading from './menu-heading';
import menuItem from './menu-item';
import menuList from './menu-list';
import navItem from './nav-item';
import navigation from './navigation';
import openHours from './open-hours';
import siteSettings from './site-settings';
import slide from './slide';
import socialLink from './social-link';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: [
    ...schemaTypes,
    // The following are document types which will appear
    // in the studio.
    address,
    blockContent,
    gig,
    googleMaps,
    menuHeading,
    menuItem,
    navItem,
    openHours,
    slide,
    socialLink,
    // Documents
    homeEvents,
    imageGallery,
    liveMusic,
    menuList,
    navigation,
    siteSettings,
  ],
});
