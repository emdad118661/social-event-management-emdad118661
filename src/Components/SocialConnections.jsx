import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialConnections = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl text-center">Find Us on</h1>
            <br />
            <div className="mx-auto ml-14 md:flex">
            <Link to="https://www.facebook.com/imdadulhaq.speaking/" className="flex items-center justify-center text-2xl text-center border border-black h-52 w-96 rounded-xl"><FaFacebook className="mr-2" /> Facebook</Link>
            <Link to="https://github.com/emdad118661" className="flex items-center justify-center text-2xl text-center border-black border-x md:border-y h-52 w-96 rounded-xl"><FaGithub className="mr-2" /> Github</Link>
            <Link to="https://www.linkedin.com/in/emdadul-haque-700691180/" className="flex items-center justify-center text-2xl text-center border border-black h-52 w-96 rounded-xl"><FaLinkedin className="mr-2"/> LinkedIn</Link>
            </div>
            
        </div>
    );
};

export default SocialConnections;