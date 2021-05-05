import { IoImagesOutline as icon } from 'react-icons/io5';

export default {
  title: 'Slides',
  name: 'slide',
  type: 'image',
  icon,
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true,
      },
    },
  ],
};
