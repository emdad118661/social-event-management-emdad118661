import { Link } from "react-router-dom";

const UpcomingEvent = ({upcomingEvent}) => {
    const {event_name, date, time} = upcomingEvent;
    return (
        <div>
            <Link to="/upcommingEvents">{event_name}, Date: {date}, at {time}........</Link>
        </div>
    );
};

export default UpcomingEvent;