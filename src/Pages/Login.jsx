import { useContext, useRef, useState } from "react";
import { GiTreeBranch } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { MailContext } from "../providers/MailProvider";



const Login = () => {

    const {login, setLoading, googleLogin} = useContext(AuthContext);

   const [,setMail] = useContext(MailContext);

    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const location = useLocation();
    // console.log(location);
        
    const emailRef = useRef();
    
    const handleForgetEmail = () => {
        setMail(emailRef.current.value);
    }

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMessage('');

        login(email, password)
        .then(() => {
            // console.log(userCredential);
            e.target.reset();
            navigate(location?.state ? location.state : '/');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMess = error.message;
            // console.log(errorCode,errorMess );
            // console.log(loading, user);
            setErrorMessage(errorCode, errorMess);
            setLoading(false);
          });

    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => {
            // console.log(result);
            navigate(location?.state ? location.state : '/');
        })
        .catch((error) => {
            const errorMess = error.message;
            setErrorMessage(errorMess);

          });
    }

    return (
        <div className="min-h-screen flex justify-center items-center">

            <div className="flex flex-col justify-center items-center h-full w-full">
            <div className="text-center mb-8"><Link to='/' className="btn btn-ghost text-xl"><GiTreeBranch></GiTreeBranch> Eco-Wonderland</Link></div>
                <h1 className="text-4xl my-4"> Login now </h1>
                <button className="btn max-w-sm w-full bg-black text-white my-4 shadow-2xl" onClick={handleGoogleLogin}> <FcGoogle className="text-xl" />Login with Google</button>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" ref={emailRef} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to='/auth/resetPassword' className="label-text-alt link link-hover" onClick={handleForgetEmail}>Forgot password?</Link>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {
                        errorMessage && <p className='px-8 pb-8 text-center text-red-600'>{errorMessage}</p>
                    }
                </div>

                <h2 className="my-4">Do not have an account? then <Link to='/auth/signup' className="text-blue-600">Sign Up</Link></h2>

            </div>


            
        </div>
    );
};

export default Login;