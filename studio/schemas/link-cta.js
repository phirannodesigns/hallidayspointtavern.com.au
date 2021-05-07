import { IoExitOutline as icon } from 'react-icons/io5';

export default {
  name: 'linkCta',
  title: 'Link to another website',
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
      title: 'Link',
      name: 'link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
};
