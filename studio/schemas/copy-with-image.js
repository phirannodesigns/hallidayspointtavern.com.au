import { IoCalendarOutline as icon } from 'react-icons/io5';

export default {
  name: 'copyWithImage',
  title: 'Copy With Image',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Hide section',
      name: 'isHidden',
      type: 'boolean',
    },
    {
      name: 'heading1',
      title: 'Heading Line 1',
      type: 'string',
    },
    {
      name: 'heading2',
      title: 'Heading Line 2',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description (lead)',
      type: 'string',
    },
    {
      name: 'copy',
      title: 'Copy',
      type: 'richText',
    },
    {
      name: 'cta',
      title: 'Call to action',
      type: 'array',
      of: [{ type: 'fileCta' }, { type: 'pageCta' }, { type: 'linkCta' }],
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'backgroundImage',
      title: 'Background image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Events',
      };
    },
  },
};
