import S from '@sanity/desk-tool/structure-builder';
import {
  IoCalendarOutline,
  IoCogOutline,
  IoMenuOutline,
  IoMusicalNotesOutline,
} from 'react-icons/io5';

const hiddenDocTypes = (listItem) =>
  !['homeEvents', 'liveMusic', 'navigation', 'siteSettings'].includes(
    listItem.getId()
  );

export default () =>
  S.list()
    .title('Content')
    .items([
      // Everything else
      ...S.documentTypeListItems().filter((docType) => hiddenDocTypes(docType)),
      // Events
      S.listItem()
        .title('Events')
        .icon(IoCalendarOutline)
        .child(S.document().schemaType('homeEvents').documentId('homeEvents')),
      // Live Music
      S.listItem()
        .title('Live Music')
        .icon(IoMusicalNotesOutline)
        .child(S.document().schemaType('liveMusic').documentId('liveMusic')),
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
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
    ]);
