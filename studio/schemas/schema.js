// First, we must import the schema creator
// Then import schema types from any plugins that might expose them

// eslint-disable-next-line import/no-unresolved
import schemaTypes from 'all:part:@sanity/base/schema-type';
// eslint-disable-next-line import/no-unresolved
import createSchema from 'part:@sanity/base/schema-creator';

// We import object and document schemas
import address from './address';
import blockContent from './block-content';
import copyWithImage from './copy-with-image';
import event from './event';
import eventsPage from './events-page';
import eventsSection from './events-section';
import googleMaps from './google-maps';
import imageGallery from './image-gallery';
import menuHeading from './menu-heading';
import menuItem from './menu-item';
import menuList from './menu-list';
import navItem from './nav-item';
import navigation from './navigation';
import openHours from './open-hours';
import richText from './rich-text';
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
    copyWithImage,
    event,
    eventsSection,
    googleMaps,
    menuHeading,
    menuItem,
    navItem,
    openHours,
    richText,
    slide,
    socialLink,
    // Documents
    eventsPage,
    imageGallery,
    menuList,
    navigation,
    siteSettings,
  ],
});
