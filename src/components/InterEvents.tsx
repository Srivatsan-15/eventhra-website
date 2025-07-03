import React from "react";
import "./InterEvents.scss";
import eventImg from "../assets/eventhraBg.png"

function InterEvents() {
  const events = [1, 2, 3, 4, 5];

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="row inter-events justify-content-center gap-5 rounded">
        {events.map((item, index) => (
          <div key={index} className="col-md-3 d-flex justify-content-center">
            <div className="event-card text-center mt-3">
              <img src={eventImg} alt="inter Event" className="event-image" />
              <h5 className="event-title mt-3">Hackathon 2025 Inter</h5>
              <p className="event-desc">
                Participate in our coding marathon. Win exciting prizes!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default InterEvents;
