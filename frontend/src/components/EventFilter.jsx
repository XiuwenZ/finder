import { useState } from 'react';

const EventFilter = () => {
  const [eventName, setEventName] = useState('');
  const [eventPlace, setEventPlace] = useState('');
  const [eventTime, setEventTime] = useState('');

  const handleFilter = () => {
    // Implement your filtering logic here
    // You can use the state values (eventName and eventPlace) to filter events
    // Example: Fetch events using a library like axios and update the event list dynamically
  };

  return (
    <div className="filter">
      <form className="contact__form">
        <input
          type="text"
          id="eventName"
          value={eventName}
          placeholder="Event Name"
          onChange={(e) => setEventName(e.target.value)}
        />

        <input
          type="text"
          id="eventPlace"
          value={eventPlace}
          placeholder="Place"
          onChange={(e) => setEventPlace(e.target.value)}
        />

        <input
          type="text"
          id="eventTime"
          value={eventTime}
          placeholder="Time"
          onChange={(e) => setEventTime(e.target.value)}
        />

        <div className="category_box">
          <label htmlFor="categories">Categories</label>
          <div>
            <select className="categories" id="categories">
              <option value="education">Education</option>
              <option value="music-dance">Music & Dance</option>
              <option value="food-drinks">Food & Drinks</option>
              <option value="volunteer">Volunteer</option>
            </select>
          </div>
        </div>

        <button className="filter_button" type="button" onClick={handleFilter}>
          Apply
        </button>
      </form>
    </div>
  );
};

export default EventFilter;

