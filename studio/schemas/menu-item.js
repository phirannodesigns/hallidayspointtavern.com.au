import { IoRestaurantOutline as icon } from 'react-icons/io5';

export default {
  name: 'menuItem',
  type: 'object',
  icon,
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
      type: 'string',
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
