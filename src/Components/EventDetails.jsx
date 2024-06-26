import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
const EventDetails = () => {
    const {id} = useParams();
    const events = useLoaderData();

    const event = events.find(event => event.id.toString() === id);
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center">{event.event_name}</h2>
                <br />
                <div className="flex">
                    <p className="flex mr-10"><MdOutlineDateRange className="mt-1 mr-2" /> {event.date}</p>
                    <p className="flex"><IoMdTime className="mt-1 mr-2" /> {event.time}</p>
                </div>
                <br />
                <p className="flex"><CiLocationOn className="mt-1 mr-2" /> {event.location}</p>
                <br />
                <p className="flex">{event.details}</p>
        </div>
    );
};

export default EventDetails;