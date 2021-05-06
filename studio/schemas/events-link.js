import { IoLinkOutline as icon } from 'react-icons/io5';

export default {
  name: 'eventsLink',
  title: 'Events Link',
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
      title: 'File',
      name: 'file',
      type: 'file',
      validation: (Rule) => Rule.required(),
    },
  ],
};
