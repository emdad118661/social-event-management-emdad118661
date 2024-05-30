import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json(data))
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className="mx-auto max-w-7xl">
            <h1 className="text-4xl text-center">Our Services</h1>
            <br />
            <div className="grid gap-4 md:grid-cols-2">
                {
                    services.map(service => <Service key={services.id} service={service}></Service>)
                }
            </div>
            <br />
        </div>
    );
};

export default Services;