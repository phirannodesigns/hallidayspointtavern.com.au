import { IoCalendarOutline as icon } from 'react-icons/io5';

export default {
  name: 'eventsPage',
  title: 'Events',
  type: 'document',
  icon,
  fields: [
    {
      name: 'upcomingEvents',
      title: 'Upcoming Events',
      type: 'copyWithImage',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
    {
      name: 'specialEvent',
      title: 'Special Event',
      type: 'copyWithImage',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
    {
      name: 'sportsEvent',
      title: 'Sports Event',
      type: 'copyWithImage',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
    {
      name: 'liveMusic',
      title: 'Live Music',
      type: 'eventsSection',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
    {
      name: 'raffleSection',
      title: 'Raffle Section',
      type: 'copyWithImage',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
    {
      name: 'happyHour',
      title: 'Happy Hour',
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
        title: 'Events',
      };
    },
  },
};
