import { IoFastFoodOutline as icon } from 'react-icons/io5';

export default {
  name: 'menuList',
  title: 'Menu',
  icon,
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
      of: [{ type: 'menuItem' }, { type: 'menuHeading' }],
    },
  ],
};
