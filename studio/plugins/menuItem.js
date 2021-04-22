export default {
  name: 'menuItem',
  type: 'object',

  fields: [
    {
      name: 'itemName',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
    },
    {
      name: 'glutenFree',
      title: 'Glute Free',
      type: 'boolean',
    },
  ],
};
