import { IoMenuOutline as icon } from 'react-icons/io5';

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Nav Items',
      name: 'navItems',
      type: 'array',
      of: [{ type: 'navItem' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'shareImage',
    },
    prepare(selection) {
      return { ...selection };
    },
  },
};
