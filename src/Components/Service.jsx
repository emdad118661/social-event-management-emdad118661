import { Link } from "react-router-dom";


const Service = ({ service }) => {
    const { id, service_name, description, price, image_url } = service;
    return (
        <div>
            <Link to={`/service/${id}`}>
                <div className="shadow-2xl card card-side bg-base-100">
                    <figure><img src={image_url} alt="Movie" /></figure>
                    <div className="w-1/2 card-body">
                        <h2 className="card-title">{service_name}</h2>
                        <p>{description}</p>
                        <p><span className="font-extrabold">Estimated Booking Price:</span> {price}</p>
                        <div className="justify-end card-actions">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Service;