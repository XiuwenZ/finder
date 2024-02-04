import Navbar from './Navbar';
import Footer from './Footer';
import course2 from '../assets/course2.jpg';

const EventDetail = () => {
  return (
    <>
      <Navbar />
      <div className="event-card">
        <div className="event-header">
          <h1 className="event-title">Children's Painting Workshops</h1>
          <div className="event-date">Aug 14</div>
        </div>
        <div className="event-info">
          By NY Children Organization <span>👍🏻😮❤️</span> 300 People are Joined
        </div>
        <div className="event-schedule">
          <p>
            <strong>Monday</strong>
          </p>
          <p>08.00 am - 02.00 pm</p>
          <p>Brookline College, NY</p>
        </div>
        <img src={course2} />
        <div className="event-description">
          <p>Description</p>
          <p>
            Skateboard community birthday celebration event. Invites all people
            to enliven this event.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );

  // const { eventName, eventPlace, eventDetail } = event;
  // return (
  //   <div className="event-card">
  //     <div className="event-header">
  //       <h1 className="event-title">{eventName}</h1>
  //       <div className="event-date">Sep 14</div>
  //     </div>
  //     <div className="event-info">
  //       By Children Community <span>👍🏻😮❤️</span> 2.1k People are Joined
  //     </div>
  //     <div className="event-schedule">
  //       <p>
  //         <strong>Monday</strong>
  //       </p>
  //       <p>08.00 pm - 22.00 pm</p>
  //       <p>{eventPlace}</p>
  //     </div>
  //     <div className="event-map"></div>
  //     <div className="event-description">
  //       <p>{eventDetail}</p>
  //     </div>
  //   </div>
  // );
};

export default EventDetail;

