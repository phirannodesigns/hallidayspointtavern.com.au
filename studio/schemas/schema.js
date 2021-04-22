// First, we must import the schema creator
// Then import schema types from any plugins that might expose them

// eslint-disable-next-line import/no-unresolved
import schemaTypes from 'all:part:@sanity/base/schema-type';
// eslint-disable-next-line import/no-unresolved
import createSchema from 'part:@sanity/base/schema-creator';

// We import object and document schemas
import address from './address';
import blockContent from './block-content';
import googleMaps from './google-maps';
import navItem from './nav-item';
import navigation from './navigation';
import openHours from './open-hours';
import siteSettings from './site-settings';
import socialLink from './social-link';
import menuList from './menuList';

import * as plugs from '../plugins';
import plugDefaultFields from '../plugins/_plugDefaultFields';

const allPlugins = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) };
});

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    address,
    googleMaps,
    navItem,
    openHours,
    socialLink,
    blockContent,
    // Documents
    navigation,
    siteSettings,
    menuList,
  ]).concat(allPlugins),
});
