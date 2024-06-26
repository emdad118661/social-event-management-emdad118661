import { MdOutlineDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const UpcommingEventDetail = ({ data }) => {
    const { id, event_name, date, time, location, description } = data;
    return (
        <div className="shadow-xl card bg-base-100 w-96">
            <div className="card-body">
                <h2 className="card-title">{event_name}</h2>
                <br />
                <div className="flex">
                    <p className="flex"><MdOutlineDateRange className="mt-1 mr-2" /> {date}</p>
                    <p className="flex"><IoMdTime className="mt-1 mr-2" /> {time}</p>
                </div>
                <br />
                <p className="flex"><CiLocationOn className="mt-1 mr-2" /> {location}</p>
                <br />
                <p className="flex">{description}</p>
                <div className="justify-end card-actions">
                    <Link to={`/upcommingEvents/${id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UpcommingEventDetail;