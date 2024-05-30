
import Services from "./Services";
import UpcomingEvents from "./UpcomingEvents";
const Home = () => {
    return (
        <div>
            <UpcomingEvents></UpcomingEvents>
            <div className="min-h-screen hero" style={{ backgroundImage: 'url(https://i.ibb.co/T8TQZnC/Banner.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Emdad Event Management</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <a href="#services" className="btn btn-primary">Look at our services</a>
                    </div>
                </div>
            </div>
            <br />
            <Services></Services>
        </div>

    );
};

export default Home;