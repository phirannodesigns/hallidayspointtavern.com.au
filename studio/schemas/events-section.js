import { IoMusicalNotesOutline as icon } from 'react-icons/io5';

export default {
  name: 'eventsSection',
  title: 'Events',
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
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [{ type: 'event' }],
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
