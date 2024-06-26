import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);
const location = useLocation();
const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);

        //login with firebase
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.log(error);
            })
            
    }
    return (
        <div>
            <br />
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <br />
            <div className="min-h-screen hero bg-base-200">
                <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
                    <form onClick={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="mt-6 form-control">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <small className="mb-5 text-center">New here? Please <Link className="font-extrabold text-blue-900" to="/register">Register</Link></small>
                </div>

            </div>
        </div>
    );
};

export default Login;