import React from 'react';
import EventCard from './EventCard';
import './EventList.css'

const EventsList = ({ events }) => {
  return (
    <div class="eventList">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsList;
