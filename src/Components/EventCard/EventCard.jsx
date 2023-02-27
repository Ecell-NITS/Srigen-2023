import React from "react";
// eslint-disable-next-line import/no-unresolved
import "./EventCard.scss";
import Data from "./EventCardData.json";
const EventCard = () => {
  const EventDetailsArray = Data.cardDataArray;

  return (
    <div className="wrapper">
      <div className="cols">
        {EventDetailsArray.map((item) => (
          <div
            className="col"
            onTouchStart={(event) => event.currentTarget.classList.toggle("hover")}
          >
            <div className="container">
              <div className="front" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="inner">
                  <p>{item.title1}</p>
                  {/* <span>{item.subTitle}</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
