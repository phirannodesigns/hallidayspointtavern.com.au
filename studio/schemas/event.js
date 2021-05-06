import { IoCalendarOutline as icon } from 'react-icons/io5';

export default {
  title: 'Event',
  name: 'event',
  type: 'object',
  icon,
  fields: [
    {
      name: 'overview',
      title: 'Heading',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
