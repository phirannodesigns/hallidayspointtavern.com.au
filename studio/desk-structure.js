import { CogIcon, LinkIcon } from '@heroicons/react/outline';
import S from '@sanity/desk-tool/structure-builder';
import * as React from 'react';

const hiddenDocTypes = (listItem) =>
  ![
    'navigation',
    'siteSettings',
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      // Everything else
      ...S.documentTypeListItems().filter((docType) => hiddenDocTypes(docType)),
      // Navigation
      S.listItem()
        .title('Navigation')
        .icon(() => <LinkIcon style={{ height: '1em', width: '1em', }} />)
        .child(S.document().schemaType('navigation').documentId('navigation')),
      // Site settings
      S.listItem()
        .title('Site Settings')
        .icon(() => <CogIcon style={{ height: '1em', width: '1em', }} />)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
    ]);
