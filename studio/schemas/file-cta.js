import { IoDocumentAttachOutline as icon } from 'react-icons/io5';

export default {
  name: 'fileCta',
  title: 'Link to file',
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
