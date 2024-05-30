import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ServiceDetails = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const service = services.find(service => service.id === idInt);

    const notify = () => toast("Booked successfully!!");
    return (
        <div className="flex flex-col mx-auto md:flex-row max-w-7xl">
            <div className="order-2 md:order-1 md:w-1/2">
                <h1 className="text-2xl"><b>Service:</b> {service.service_name}</h1>
                <br />
                <p><b>Description:</b> {service.big_description}</p>
                <br />
                <p><b>Estimated Price:</b> {service.price}</p>
                <br />
                <button onClick={notify} className="btn btn-primary">Booking: {service.price}</button>
                <ToastContainer />
            </div>
            <div className="order-1 mt-10 md:order-2 md:ml-10">
                <img src={service.image_details_url} alt="" />
            </div>
        </div>

    );
};

export default ServiceDetails;