import { CogIcon, LinkIcon } from '@heroicons/react/outline';
import S from '@sanity/desk-tool/structure-builder';
import * as React from 'react';
import { IoMdToday, IoIosRestaurant, IoIosBed } from 'react-icons/io';

const hiddenDocTypes = (listItem) =>
  !['navigation', 'siteSettings', 'menuList'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      // Everything else
      ...S.documentTypeListItems().filter((docType) => hiddenDocTypes(docType)),
      S.listItem()
      .title('Menu')
      .icon(IoIosRestaurant)
      .schemaType('menuList')
      // When you open this list item, list out the documents
      // of the type “project"
      .child(S.documentTypeList('menuList')),
      // Navigation
      S.listItem()
        .title('Navigation')
        .icon(() => <LinkIcon style={{ height: '1em', width: '1em' }} />)
        .child(S.document().schemaType('navigation').documentId('navigation')),
      // Site settings
      S.listItem()
        .title('Site Settings')
        .icon(() => <CogIcon style={{ height: '1em', width: '1em' }} />)
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
    ]);
