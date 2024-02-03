import course2 from '../assets/course2.jpg';
import EventFilter from './EventFilter';

const events = {
  "Children's Painting Workshops": {
    details: 'Ignite young minds through innovative Paintings.',
    imageUrl: course2,
  },
  'Community Clean-Up': {
    details: 'Help keep our community clean by picking up trash and recycling.',
    imageUrl: course2,
  },
  'Food Bank Distribution': {
    details: 'Assist with food distribution to those in need.',
    imageUrl: course2,
  },
};

const EventCard = ({ eventName, eventDetails, imageUrl }) => (
  <article className="course">
    <div className="course__image">
      <img src={imageUrl} alt={`Image for ${eventName}`} />
    </div>
    <div className="course__info">
      <div className="left">
        <p className="btn btn-primary">Aug 20</p>
      </div>
      <div className="right">
        <h4>{eventName}</h4>
        <p>{eventDetails}</p>
      </div>
    </div>
  </article>
);

const MoreEvents = () => {
  return (
    <section>
      <h2>Discover More Events</h2>
      <EventFilter />

      <div className="container courses__container">
        {Object.keys(events).map((eventName) => (
          <EventCard
            key={eventName}
            eventName={eventName}
            eventDetails={events[eventName].details}
            imageUrl={events[eventName].imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreEvents;

