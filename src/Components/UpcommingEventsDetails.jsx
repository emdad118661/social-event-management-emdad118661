import { useLoaderData } from "react-router-dom";
import UpcommingEventDetail from "./UpcommingEventDetail";

const UpcommingEventsDetails = () => {
    const data = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="mb-5 text-3xl text-center">Upcomming Events</h2>
            <div className="grid grid-cols-2 gap-4">
            {
                data.map(aData => <UpcommingEventDetail key={aData.id} data={aData}></UpcommingEventDetail>)
            }
            </div>
        </div>
    );
};

export default UpcommingEventsDetails;