import { useContext, useState } from "react";
import { GiTreeBranch } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";


const SignUp = () => {

    const {signup, updateUserProfile, setUser, setLoading, googleLogin} = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();



    const handleSignup = (e) =>{
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(name,photo, email, password);

        setErrorMessage('');

        const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!pattern.test(password)) {
            setErrorMessage('Password should be at least 6 character long and must have 1 uppercase and 1 lowercase');
            return;
        }
        
        signup(email, password)
        .then(() => {
            // console.log(userCredential);
            const updateData = {displayName: name, photoURL: photo};
            updateUserProfile(updateData)
            .then(() => {
                setUser((prevUser) => {
                return {...prevUser, updateData}
                });
            })
            e.target.reset();
            navigate('/')
          })
          .catch((error) => {
            const errorMess = error.message;
            // console.log(errorCode,errorMess );
            setErrorMessage(errorMess);
            setLoading(false);
          });
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => {
            // console.log(result);
            navigate('/');
        })
        .catch((error) => {
            const errorMess = error.message;
            setErrorMessage(errorMess);
          });
    }

    return (
        <div className="min-h-screen flex justify-center items-center">

            <div className="flex flex-col justify-center items-center h-full w-full">
            <div className="text-center mb-4"><Link to='/' className="btn btn-ghost text-xl"><GiTreeBranch></GiTreeBranch> Eco-Wonderland</Link></div>
                <h1 className="text-4xl mb-4"> SignUp now </h1>
                <button className="btn max-w-sm w-full bg-black text-white my-4 shadow-2xl" onClick={handleGoogleLogin}> <FcGoogle className="text-xl" />Sign Up with Google</button>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="UserName" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" name="photo" placeholder="PhotoUrl" className="input input-bordered" required />
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
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">SignUp</button>
                        </div>
                    </form>
                    {
                        errorMessage && <p className='px-8 pb-8 text-center text-red-600'>{errorMessage}</p>
                    }
                </div>

                <h2 className="my-4">Already have an account? then <Link to='/auth/login' className="text-blue-600">Login</Link></h2>

            </div>


            
        </div>
    );
};

export default SignUp;