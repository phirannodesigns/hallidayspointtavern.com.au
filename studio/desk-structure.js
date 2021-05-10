import S from '@sanity/desk-tool/structure-builder';
import {
  IoCalendarOutline,
  IoCogOutline,
  IoHomeOutline,
  IoImagesOutline,
  IoMenuOutline,
} from 'react-icons/io5';

const hiddenDocTypes = (listItem) => ![
  'eventsPage',
  'homePage',
  'imageGallery',
  'navigation',
  'siteSettings',
].includes(listItem.getId());

export default () => S.list()
  .title('Content')
  .items([
    // Home Page
    S.listItem()
      .title('Home Page')
      .icon(IoHomeOutline)
      .child(S.document().schemaType('homePage').documentId('homePage')),
    // Events
    S.listItem()
      .title('Events')
      .icon(IoCalendarOutline)
      .child(S.document().schemaType('eventsPage').documentId('eventsPage')),
    // Everything else
    ...S.documentTypeListItems().filter((docType) => hiddenDocTypes(docType)),
    // Image Gallery
    S.listItem()
      .title('Image Gallery')
      .icon(IoImagesOutline)
      .child(
        S.document().schemaType('imageGallery').documentId('imageGallery'),
      ),
    // Navigation
    S.listItem()
      .title('Navigation')
      .icon(IoMenuOutline)
      .child(S.document().schemaType('navigation').documentId('navigation')),
    // Site settings
    S.listItem()
      .title('Site Settings')
      .icon(IoCogOutline)
      .child(
        S.document().schemaType('siteSettings').documentId('siteSettings'),
      ),
  ]);
