import { IoIosHappy as icon } from 'react-icons/io';

export default {
  name: 'homeEvents',
  title: 'Home Page Events',
  type: 'document',
  icon,
  fields: [
    {
      name: 'heading1',
      title: 'Heading Line 1',
      type: 'string',
    },
    {
      name: 'heading2',
      title: 'Heading Line 2',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description (lead)',
      type: 'string',
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
      name: 'gigs',
      title: 'Events',
      type: 'array',
      of: [
        {
          type: 'gig',
        },
      ],
    },
  ],
};
