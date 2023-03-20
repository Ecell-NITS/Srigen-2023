import { useParams } from "react-router-dom";
import { Event } from "../../Components";
import EventData from "../../Data/EventData.json";

const EventPage = () => {
  const eventID = useParams();
  const ind = parseInt(eventID.id, 10);

  if (ind > 0 && ind <= EventData.length) {
    return <Event data={EventData[ind - 1]} />;
  }
  return <div>Error Page</div>;
};

export default EventPage;
