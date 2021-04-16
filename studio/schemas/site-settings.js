export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Default page description',
      name: 'description',
      type: 'text',
      rows: 4,
    },
    {
      title: 'Site URL',
      name: 'siteUrl',
      type: 'string',
    },
    {
      title: 'Share image',
      name: 'shareImage',
      type: 'image',
      options: {
        hotspot: false,
      },
    },
    {
      title: 'Phone number',
      name: 'phoneNumber',
      type: 'string',
    },
    {
      title: 'Email address',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Hours',
      name: 'hours',
      type: 'array',
      of: [{ type: 'openHours' }],
    },
    {
      title: 'Address',
      name: 'address',
      type: 'address',
    },
    {
      title: 'Social Links',
      name: 'socialLinks',
      type: 'array',
      of: [{ type: 'socialLink' }],
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
