import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import UpcomingEvent from "./UpcomingEvent";

const UpcomingEvents = () => {
    const [upcomingEvents, setUpcomingEvents] = useState([]);

    useEffect(() => {
        fetch("/upcomingEvents.json")
            .then(res => res.json(data))
            .then(data => setUpcomingEvents(data))
    }, [])
    return (
        <div className="flex">
            <button className="btn btn-primary">Upcoming Events</button>
            <Marquee pauseOnHover={true} speed={50}>
                {
                    upcomingEvents.map(upcomingEvent => <UpcomingEvent key={upcomingEvent.id} upcomingEvent={upcomingEvent}></UpcomingEvent>)
                }
            </Marquee>
        </div>
    );
};

export default UpcomingEvents;