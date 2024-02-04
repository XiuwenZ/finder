import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="event-card">
      <img src={event.image_urls[0]} alt={event.name} className="event-image" />
      <div className="event-info">
        <h3 className="event-name">{event.name}</h3>
        <p className="event-summary">{event.summary}</p>
        <p className="event-date">Start Date: {formatDate(event.start_date)}</p>
        <button className="attend-button">Attend this event</button>
      </div>
    </div>
  );
};

export default EventCard;
