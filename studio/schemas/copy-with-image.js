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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
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
