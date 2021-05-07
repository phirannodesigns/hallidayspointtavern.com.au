import { IoCalendarOutline as icon } from 'react-icons/io5';

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'welcomeSection',
      title: 'Welcome Section',
      type: 'copyWithImage',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
    {
      name: 'menuSection',
      title: 'Menu Section',
      type: 'copyWithImage',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
    {
      name: 'upcomingEvents',
      title: 'Upcoming Events',
      type: 'eventsSection',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
    {
      name: 'trivia',
      title: 'Trivia',
      type: 'copyWithImage',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
    {
      name: 'courtesyBus',
      title: 'Courtesy Bus',
      type: 'copyWithImage',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      };
    },
  },
};
