import { LinkIcon } from '@heroicons/react/outline';
import * as React from 'react';

export default {
  title: 'Nav item',
  name: 'navItem',
  type: 'object',
  icon: () => <LinkIcon style={{ height: '1em', width: '1em' }} />,
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'route',
      title: 'Route',
      type: 'slug',
      options: {
        source: 'label',
        maxLength: 96,
      },
    },
    {
      title: 'Footer Only',
      name: 'footerOnly',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'label',
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
};
