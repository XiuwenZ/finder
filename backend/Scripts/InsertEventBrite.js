const axios = require('axios');
const db = require('../db'); // Your database connection file

const eventbriteApiKey = 'SW5YMBNXNHOW5Z75SYEW';
const eventbriteBaseUrl = 'https://www.eventbriteapi.com/v3/events/';

const eventIds = ['804007828057']; // Replace with your event IDs

const fetchEventById = async (eventId) => {
  const url = `${eventbriteBaseUrl}${eventId}/?token=${eventbriteApiKey}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching event ${eventId}:`, error);
  }
};

const insertEventIntoDatabase = async (event) => {
  const query = `
    INSERT INTO events (name, summary, description, category, start_date, end_date, image_urls)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
  `;
  const values = [
    event.name.text,
    event.summary,
    event.description.text,
    event.category_id,
    new Date(event.start.local),
    new Date(event.end.local),
    [event.logo.original.url]
  ];
  
  try {
    await db.query(query, values);
  } catch (error) {
    console.error(`Error inserting event ${event.id} into database:`, error);
  }
};

const fetchAndInsertEvents = async () => {
  for (const eventId of eventIds) {
    const event = await fetchEventById(eventId);
    if (event) {
      await insertEventIntoDatabase(event);
    }
  }
};

fetchAndInsertEvents();