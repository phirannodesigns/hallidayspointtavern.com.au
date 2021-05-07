import { IoLinkOutline as icon } from 'react-icons/io5';

export default {
  name: 'pageCta',
  title: 'Link to page',
  type: 'object',
  icon,
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Page',
      name: 'page',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
