import { ShareIcon } from '@heroicons/react/outline';
import * as React from 'react';

export default {
  title: 'Social Link',
  name: 'socialLink',
  type: 'object',
  icon: () => <ShareIcon style={{ height: '1em', width: '1em', }} />,
  fields: [
    {
      title: 'Social Network',
      name: 'socialNetwork',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter'],
        direction: 'horizontal',
      },
    },
    {
      title: 'Link',
      name: 'link',
      type: 'string',
    },
  ],
  preview: {
    select: {
      socialNetwork: 'socialNetwork',
    },
    prepare({ socialNetwork }) {
      const title = socialNetwork;
      return {
        title,
      };
    },
  },
};
