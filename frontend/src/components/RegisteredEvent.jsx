import course2 from '../assets/course2.jpg';

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
  'Local Animal Shelter': {
    details:
      'Spend time with animals and help with daily tasks at the shelter.',
    imageUrl: course2,
  },
  'Senior Center Visits': {
    details:
      'Spend time with seniors and assist with activities at the center.',
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

const RegisteredEvent = () => {
  return (
    <section>
      <h2>Your Registered Events</h2>
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

export default RegisteredEvent;

