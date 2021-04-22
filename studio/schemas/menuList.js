import { IoIosRestaurant } from 'react-icons/io';

export default {
  name: 'menuList',
  title: 'Menu list',
  icon: IoIosRestaurant,
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required().error('Please set a category name'),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'menuItem',
        },
      ],
    },
  ],
};
