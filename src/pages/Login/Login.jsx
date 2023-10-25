import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";


const Login = () => {

    const [success, setSuccess] = useState();
    const [loginError, setLoginError] = useState();


    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const handleGoogleSignIn = e => {
        e.preventDefault();
        googleSignIn()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
            setLoginError(error.message)
        })
    }

    const handleLogIn = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setSuccess('');
        setLoginError('');

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('Login successfully')

                // navigate
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error)
                setLoginError(error.message)
            })
    }
    return (
        <div className=" text-center" >
            <h1 className="pt-10  font-bold text-3xl">Please login</h1>
            <form onSubmit={handleLogIn} className="card-body lg:w-1/2 mx-auto border rounded-md my-8 bg-purple-100 text-xl">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                </div>

                <div className="form-control my-6">
                    <button className="btn btn-neutral ">Login</button>
                </div>
                {
                    success && <p className="text-green-700 ">{success}</p>
                }
                {
                    loginError && <p className="text-red-500 ">{loginError}</p>
                }
                <p>Don't have an account? <Link to="/register" className="font-bold text-[#B55B4E]" >Register Now</Link></p>
                <div>
                    <Link><button onClick={handleGoogleSignIn} className="btn mt-6 items-center"> <FaGoogle className="text-xl mr-3 text-blue-500"></FaGoogle> Log in With Google</button></Link> 
                </div>
            </form>
                

        </div>
    );
};

export default Login;