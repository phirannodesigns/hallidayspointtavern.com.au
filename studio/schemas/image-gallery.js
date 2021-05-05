export default {
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'document',
  fields: [
    {
      title: 'Slides',
      name: 'slides',
      type: 'array',
      of: [{ type: 'slide' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Image Gallery',
      };
    },
  },
};
