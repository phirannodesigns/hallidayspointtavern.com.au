export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
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
      return { ...selection }
    },
  },
}
