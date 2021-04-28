import { IoIosMegaphone as icon } from 'react-icons/io';

export default {
  name: 'liveMusic',
  title: 'Live Music',
  type: 'document',
  icon,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
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
      title: 'Gigs',
      type: 'array',
      of: [
        {
          type: 'gig',
        },
      ],
    },
  ],
};
