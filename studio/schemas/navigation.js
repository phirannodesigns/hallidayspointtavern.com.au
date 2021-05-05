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
    prepare() {
      return {
        title: 'Navigation',
      };
    },
  },
};
