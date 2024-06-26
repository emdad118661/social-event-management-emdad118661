import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        console.log(name, email, password);

        //create user
        createUser(email, password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <br />
            <h1 className="text-5xl font-bold text-center">Register now!</h1>
            <br />
            <div className="min-h-screen hero bg-base-200">
                <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
                    <form onClick={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
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
                    <small className="mb-5 text-center">Already have an account? Please <Link className="font-extrabold text-blue-900" to="/login">Login</Link></small>
                </div>

            </div>
        </div>

    );
};

export default Register;