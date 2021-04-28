export default {
  name: 'gig',
  type: 'object',

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
